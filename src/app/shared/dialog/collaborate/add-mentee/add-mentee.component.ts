import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { CollaborateService } from 'src/app/services/collaborate.service';

@Component({
  selector: 'app-add-mentee',
  templateUrl: './add-mentee.component.html',
  styleUrls: ['./add-mentee.component.scss']
})
export class AddMenteeComponent implements OnInit {
  mentorshipForm: FormGroup;
  getBatch: any;
  getInstitute: any;
  skills: any;
  cities2: any;
  primaryIndustry: any;
  secondaryIndustry: any;
  primaryFunc: any;
  secondaryFunc: any;
  skill: any;
  allMentorUser: any;
  submitted: boolean = false;
  filterdMentee: any;

  constructor(public fb: FormBuilder, private collaborateService: CollaborateService,
    private notifyService: TokenInterceptor,
    public dialogref: MatDialogRef<AddMenteeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.buildForm();
    this.getCommonData();
    this.getAllWillingProvideMentorship();

    //OnChange filter data
    this.mentorshipForm.valueChanges.subscribe((change: any) => {
      this.filterData(change);
    });

    let action: string = "filterMentor";
    this.collaborateService
      .postData(action, this.mentorshipForm.value)
      .subscribe((x: any) => {
        this.filterdMentee = x?.data?.flatMap((item: any) => item);
      });
  }

    /**
   * Functiont to build form data
   */
    buildForm() {
      this.mentorshipForm = this.fb.group({
        batchYear_id: [""],
        institute_id: [""],
        skill: [""],
        primary_industry_focus: [""],
        secondary_industry_focus: [""],
        primary_function_area: [""],
        secondary_function_area: [""],
        user_id: [this.data?.data?.user_id, Validators.required],
        mentee_user_id: [[], Validators.required],
        mentor_user_id: [""]
      });
    }


      /**
   * Function to get All Mentorship user
   */
  async getAllWillingProvideMentorship() {
    let action: string = "willProvide-mentorship";
    await this.collaborateService.getAllData(action).subscribe(
      (res: any) => {
        if (res?.status == 200) {
          this.allMentorUser = res?.data;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

   /**
   * Function to add mentorship
   */
   async addMentorship() {
    this.submitted = true;
    let action:string =  "add-menteeMentor";
    let params = {
        user_id: this.data?.data?.user_id,
        mentee_user_id: this.mentorshipForm?.value?.mentee_user_id,
      };
      console.log(params, action)
    await this.collaborateService.addUpdateMentorData(action, params).subscribe(
      (res: any) => {
        if (res?.status == 200) {
          this.notifyService.notificationService.success(res?.message);
        }
      },
      (error) => {
        this.notifyService.notificationService.error(error);
      }
    );
  }

    /**
   * Function to Filter Data
   */
    async filterData(event: any) {
      let action: string = "filterMentor";
      await this.collaborateService.postData(action, event).subscribe((x: any) => {
        this.filterdMentee = x?.data?.flatMap((item: any) => item);
      });
    }

  async getCommonData() {
    let action = "all-common";
    await this.collaborateService.getAllData(action).subscribe(
      (res: any) => {
        console.log(res);
        this.getBatch = res?.Batch_Year;
        this.getInstitute = res?.Institute;
        this.primaryIndustry = res?.Primary_Industry;
        this.secondaryIndustry = res?.Secondary_Industry;
        this.primaryFunc = res?.Primary_Function;
        this.secondaryFunc = res?.Secondary_Function;
        this.skill = res?.Skill;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
