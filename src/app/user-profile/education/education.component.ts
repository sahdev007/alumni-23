import { Component, Input, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TokenInterceptor } from "../../core/token.interceptor";
import { DataService } from "../../services/data.service";
import { Config } from "../../services/config";

@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.scss"],
})
export class EducationComponent implements OnInit {
  @Input() type: any;
  @Input() profileData: any;
  @Input() otherProfile: any;
  @Input() commonData: any;
  educationForm: FormGroup;
  specialization: any;
  submitted: boolean = false;
  currentUser: any;
  loading: boolean = false;
  eduId: any;

  constructor(
    private fb: FormBuilder,
    private config: Config,
    private dataService: DataService,
    private notify: TokenInterceptor
  ) {
    this.specialization = this.config?.specialization;
    if (localStorage) {
      this.currentUser = JSON?.parse(
        localStorage?.getItem("currentUser") || ""
      );
    }
  }

  async ngOnInit() {
    this.buildform();
    this.loading = true;

    setTimeout(() => {
        this.educationForm.patchValue({
          ...this.profileData?.Education
        });

        this.educationForm.patchValue({
          ...this.otherProfile
        });

      this.loading = false;
    }, 2000);
  }

  /**
   * Function to build form data
   */
  buildform() {
    this.educationForm = this.fb.group({
      id: [""],
      degree_name: ["", Validators.required],
      institute_name: ["", Validators.required],
      passing_year: ["", Validators.required],
      specialization: ["", Validators.required],
      other_specialization: [""],
      addItems: this.fb.array([]),
    });
  }

  addItems(): FormArray {
    return this.educationForm.get("addItems") as FormArray;
  }

  get f() {
    return this.educationForm.controls;
  }

  newItems(): FormGroup {
    return this.fb.group({
      id: [""],
      degree_name: ["", Validators.required],
      institute_name: ["", Validators.required],
      passing_year: ["", Validators.required],
      specialization: ["", Validators.required],
      other_specialization: [""],
    });
  }

  addQuantity() {
    this.addItems().push(this.newItems());
  }

  removeItems(i: number) {
    this.addItems().removeAt(i);
  }

  async edit() {
    this.submitted = true;
    if (this.educationForm.invalid) {
      return;
    } else {
      this.loading = true;
      let action: string = "update-education";
      this.educationForm.get('id').setValue(this.profileData?.Education?.user_id);
      await this.dataService
        .updateData(action, this.educationForm.value)
        .subscribe(
          (res: any) => {
            this.notify.notificationService.success(res?.message);
            this.loading = false;
          },
          (error) => {
            this.notify.notificationService.error(error);
            this.loading = false;
          }
        );
    }
  }
}
