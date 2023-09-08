import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { CollaborateService } from 'src/app/services/collaborate.service';

@Component({
  selector: 'app-edit-mentee',
  templateUrl: './edit-mentee.component.html',
  styleUrls: ['./edit-mentee.component.scss']
})
export class EditMenteeComponent implements OnInit {
  mentorshipForm: FormGroup;
  getMenteeById: Array<any> = [];
  selectedMentee: Array<any> = [];
  allUnselectedMentee: Array<any> = [];
  newItems: Array<any> = [];
  submitted: boolean;

  constructor(public fb: FormBuilder, public dialogref: MatDialogRef<EditMenteeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private collaborateService: CollaborateService, private notifyService: TokenInterceptor) { }

  ngOnInit(): void {
    this.buildForm();

    if (
      this.data?.action == "update-mentorship" &&
      this.data?.data?.hasOwnProperty("id")
    ) {
        this.getAllMentee();
        setTimeout(() => {
          this.selectedMentee = this.getMenteeById.filter((m:any) => {

            if(m.isSelected == 'true') return m;
          });
          this.allUnselectedMentee = this.getMenteeById.filter((m:any) => {
            if(m.isSelected == 'false') return m;
          });
    
        }, 1000);
    }
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
        user_id: [this?.data?.data?.user_id, Validators.required],
        mentee_user_id: [[], Validators.required],
        mentor_user_id: [""]
      });
    }

      /**
   * Function to Get all Mentor/Mentee user
   */
  async getAllMentee() {
    let action: string = "single-mentorship" ;
    await this.collaborateService
      .getDataById(action, this.data?.data?.user_id)
      .subscribe(
        (res: any) => {
          this.getMenteeById = res?.data;
        },
        (error) => {
        }
      );
  }

  async updateMentorship() {
    this.submitted = true;
    let action: string =  "update-mentorship";
    this.selectedMentee.forEach((items: any) => {
      this.newItems.push(items?.id); 
    })
    let params = {
        user_id: JSON.parse(this.data?.data?.user_id),
        mentee_user_id: this.newItems
      };
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
}

