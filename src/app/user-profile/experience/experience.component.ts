import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { TokenInterceptor } from '../../core/token.interceptor';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() profileData: any;
  @Input() otherProfile: any;
  experienceForm: FormGroup | any;
  currentUser: any;
  loading: boolean = false;
  experienceId: any;

  constructor(
    public fb: FormBuilder,
    private dataService: DataService,
    private notify: TokenInterceptor) {
    if (localStorage) {
      this.currentUser = JSON?.parse(localStorage?.getItem('currentUser') || '');
    }
  }

  async ngOnInit() {
    this.buildform();
    this.loading = true;
    setTimeout(() => {
      if(this.currentUser?.id == this.profileData?.Users?.id){
        this.experienceForm.patchValue({
          ...this.profileData?.WorkExperience
        });
      } else {
        this.experienceForm.patchValue({
          ...this.otherProfile
        });
      }
      this.loading = false;
    }, 2000);
  }

  /**
   * Function to build form data
   */
  buildform() {
    this.experienceForm = this.fb.group({
      id: [this.experienceId?.id],
      company_name: [""],
      job_title: [""],
      start_date: [""],
      end_date: [""],
      current_working:[''],
      summary: [""],
      addItems: this.fb.array([]),
    });
  }
  addItems(): FormArray {
    return this.experienceForm.get("addItems") as FormArray;
  }

  newItems(): FormGroup {
    return this.fb.group({
      id: [this.experienceId?.id],
      company_name: [""],
      job_title: [""],
      start_date: [""],
      end_date: [""],
      current_working:[''],
      summary: [""],
    });
  }

  addQuantity() {
    this.addItems().push(this.newItems());
  }

  removeItems(i: number) {
    this.addItems().removeAt(i);
  }

  async edit() {
    this.loading = true;
    let action: string = "update-experience";
    await this.dataService.updateData(action, this.experienceForm.value).subscribe((res: any) => {
      this.notify.notificationService.openSuccessSnackBar(res?.message);
      this.loading = false;
    },
    error => {
      this.notify.notificationService.openFailureSnackBar(error);
      this.loading = false;
    })
  }
}
