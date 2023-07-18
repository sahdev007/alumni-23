import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { TokenInterceptor } from "../../core/token.interceptor";
import { Config } from "../../services/config";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-mentorship",
  templateUrl: "./mentorship.component.html",
  styleUrls: ["./mentorship.component.scss"],
})
export class MentorshipComponent implements OnInit {
  @Input() profileData: any;
  @Input() otherProfile: any;
  mentorForm: FormGroup | any;
  submitted: boolean = false;
  functionArea: any;
  industryFocus: any;
  currentUser: any;
  loading: boolean = false;
  mentorId: any;
  mentee: Array<any> = [];
  mentor: Array<any> = [];
  isCurrentUser: boolean = false;
  userId: any;
  mentorData: any;
  imgPath = environment?.imgUrl;
  allSkills: any;
  user: any;
  loadTrue: boolean | undefined;
  constructor(
    public fb: FormBuilder,
    private config: Config,
    private dataService: DataService,
    private notify: TokenInterceptor,
    public aroute: ActivatedRoute,
    public router: Router
  ) {
    this.functionArea = this.config?.functionArea;
    this.industryFocus = this.config?.industryFocus;
    if (localStorage) {
      this.currentUser = JSON?.parse(
        localStorage?.getItem("currentUser") || ""
      );
    }
    // this.userId = this.aroute?.snapshot?.queryParams?.id;
  }

  async ngOnInit() {
    this.buildform();
    this.loading = true;
    setTimeout(async () => {
      this.getAllSkills();
      this.mentorData = this.profileData?.Mentorship?.mentor_user_id;
      if (this.currentUser?.id == this.profileData?.Users?.id) {
        this.mentorForm.patchValue({
          ...this.profileData?.Mentorship
        });
      } else {
        // this.mentorForm.patchValue({
        //   ...this.otherProfile
        // });
      }
      if (this.profileData?.Mentorship != null) {
        this.mentorForm.get('id').setValue(JSON.parse(this.profileData?.Mentorship?.user_id));
      }
      this.loading = false;

      this.dataService
        .getDataById("find-user", this.currentUser?.id)
        .subscribe((res: any) => {
          if (res) {
            this.user = res?.data[0];
            //Get mentee
            res?.data?.mentee?.forEach((element: any) => {
              element?.flatMap((x: any) => {
                this.mentee.push(x);
              });

            });
            //Get mentor
            res?.data?.mentor?.forEach((element: any) => {
              element?.flatMap((x: any) => {
                this.mentor.push(x);
              });
            });
          }
          this.loading = false
        });
    }, 2800);
  }

  /**
   * Function to build form data
   */
  buildform() {
    this.mentorForm = this.fb.group({
      id: [this.currentUser?.id],
      user_id: [this.currentUser?.id],
      willing_to_provide_mentorship: ["", Validators.required],
      willing_to_be_mentee: ["", Validators.required],
      skill_id: ["", Validators.required],
      primary_function_area: [""],
      secondary_function_area: [""],
      other_function_area: [""],
      primary_industry_focus: [""],
      secondary_industry_focus: [""],
      other_industry_focus: [""],
    });
  }

  /**
   * Get all form controls
   */
  get f() {
    return this.mentorForm?.controls;
  }

  viewProfile(e: any) {
    this.router.navigate(["/view-profile"], { queryParams: { id: e?.id } });
    this.dataService.broadcastEvent(true);
  }

  async edit() {
    this.submitted = true;
    if (this.mentorForm.invalid) {
      return;
    } else if (this.mentorForm.valid) {
      this.loading = true;
      let action: string = "update-mentorship";
      let params = {
        ...this.mentorForm?.value,
        willing_to_provide_mentorship: JSON.parse(
          this.mentorForm?.value?.willing_to_provide_mentorship
        ),
      };
      await this.dataService.updateData(action, params).subscribe(
        (res: any) => {
          this.notify.notificationService.openSuccessSnackBar(res?.message);
          this.loading = false;
        },
        (error) => {
          this.notify.notificationService.openFailureSnackBar(error);
          this.loading = false;
        }
      );
    }
  }

  async getAllSkills() {
    let action: string = 'all-skill';
    await this.dataService.getData(action).subscribe((res: any) => {
      if (res?.status == 200) {
        this.allSkills = res?.Skill;
      }
    });
  }
}
