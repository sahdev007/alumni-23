import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { DataService } from "../../services/data.service";
import { Config } from "../../services/config";
import { TokenInterceptor } from "../../core/token.interceptor";

@Component({
  selector: "app-emp-business-info",
  templateUrl: "./emp-business-info.component.html",
  styleUrls: ["./emp-business-info.component.scss"],
})
export class EmpBusinessInfoComponent implements OnInit {
  @Input() profileData: any;
  @Input() otherProfile: any;
  empBuisnessForm: FormGroup | any;
  professionalTitle: any;
  professionCategory: any;
  currentUser: any;
  loading: boolean = false;
  empId: any;

  constructor(
    public fb: FormBuilder,
    public config: Config,
    public dataService: DataService,
    public notify: TokenInterceptor
  ) {
    if (localStorage) {
      this.currentUser = JSON?.parse(localStorage?.getItem('currentUser') || '');
    }
  }

  async ngOnInit() {
    console.log(this.profileData);
    this.buildForm();
    this.professionalTitle = this.config?.professionalTitle;
    this.professionCategory = this.config?.professionCategory;
    this.loading = true;
    setTimeout(() => {

      this.empBuisnessForm.patchValue({
        ...this.profileData?.Employment
      });

      this.empBuisnessForm.patchValue({
        ...this.otherProfile
      });
      
    this.loading = false;
    }, 2000);
  }

  /**
   * Function to build form data
   */
  buildForm() {
    this.empBuisnessForm = this.fb.group({
      id: [""],
      professional_title: [""],
      other_professional_title: [""],
      professional_category: [""],
      current_employer: [""],
      current_office_address: [""],
      business_owner: [""],
      business_name: [""],
    });
  }

  async edit() {
    this.loading = true;
    let action: string = "update-employment";
    this.empBuisnessForm.get('id').setValue(this.profileData?.Employment?.user_id);
    await this.dataService.updateData(action, this.empBuisnessForm.value).subscribe((res: any) => {
      this.notify.notificationService.success(res?.message);
      this.loading = false;
    },
      error => {
        this.notify.notificationService.error(error);
        this.loading = false;
      })
  }
}
