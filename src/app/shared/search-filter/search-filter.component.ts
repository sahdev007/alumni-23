import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { DataService } from 'src/app/services/data.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {

  @Input() pageType: any;
  searchForm: FormGroup;
  entrepreneurSearchForm: FormGroup;
  mentorSearchForm : FormGroup;
  getInstitutes: any;
  getBatch: any;
  getFormData: any;
  formReset: boolean = false;
  skill: any;
  primaryFunc: any;
  secondaryFunc: any;
  primaryInd: any;
  secondaryInd: any;
  constructor(
    public fb: FormBuilder,
    private dataService: DataService,
    private userService: UsersService,
    private notify: TokenInterceptor
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.buildEntrepreneur();
    this.buildMentorshipSearch();
    this.getCommonApi();
  }

  buildForm() {
    this.searchForm = this.fb.group({
      first_name: [""],
      fullName: [""],
      email: [""],
      mobile_number: [""],
      contact: [""],
      institute_name: [""],
      batch: [""],
      status: [""],
      current_company: [""],
      company:[''],
      owner: [""],
      reg_date_from: [""],
      reg_date_to: [""],
      type: ['']
    });
  }

  buildEntrepreneur() {
    this.entrepreneurSearchForm = this.fb.group({
      name: [""],
      contact: [""],
      email: [""],
      company:[''],
      owner: [""],
      status: [""],
      type: ['']
    });
  }

  buildMentorshipSearch() {
    this.mentorSearchForm = this.fb.group({
      first_name: [""],
      email: [""],
      mobile_number: [""],
      institute_id: [""],
      batchYear_id: [""],
      primary_industry_focus: [""],
      secondary_industry_focus: [""],
      primary_function_area: [""],
      secondary_function_area: [""],
      skill: [""],
      type: ['']
    })
  }

  async getCommonApi() {
    let action = "all-common";
    await this.dataService.getData(action).subscribe(
      (res: any) => {
        this.skill = res?.Skill;
        this.getInstitutes = res?.Institute;
        this.getBatch = res?.Batch_Year;
        this.primaryInd = res?.Primary_Industry;
        this.secondaryInd = res?.Secondary_Industry;
        this.primaryFunc = res?.Primary_Function;
        this.secondaryFunc = res?.Secondary_Function;
      },
      (error) => {
        this.notify.notificationService.openFailureSnackBar(error);
      }
    );
  }

  /**
   * User search filter
   */
  async searchData() {
    let isValue = Object.keys(this.searchForm.value).some(
      (value) => !!this.searchForm.value[value]
    );
    if (!isValue) {
      this.formReset = false;
      this.notify.notificationService.warning(
        "At least one field should be selected"
      );
    } else {
      this.formReset = true;
      this.searchForm.get("type").setValue(this.pageType);
      await this.userService
        .filterUsers(this.searchForm?.value)
        .subscribe((res: any) => {
          this.userService.filteredData.next(res);
        });
    }
  }

  /**
   * Function to filter entrepreneurship table records
   */
  async searchEntreprenurData() {
    let isValue = Object.keys(this.entrepreneurSearchForm.value).some(
      (value) => !!this.entrepreneurSearchForm.value[value]
    );
    if (!isValue) {
      this.formReset = false;
      this.notify.notificationService.openWarningAlert(
        "At least one field should be selected"
      );
    } else {
      this.formReset = true;
      this.entrepreneurSearchForm.get("type").setValue(this.pageType);
      await this.userService
        .filterEntrepreneur(this.entrepreneurSearchForm?.value)
        .subscribe((res: any) => {
          this.userService.filteredData.next(res);
        });
    }
  }

/**
 * Function to Search Mentor/Mentee  
 */
  async searchMentorshipData() {
    let isValue = Object.keys(this.mentorSearchForm.value).some(
      (value) => !!this.mentorSearchForm.value[value]
    );
    if (!isValue) {
      this.formReset = false;
      this.notify.notificationService.openWarningAlert(
        "At least one field should be selected"
      );
    } else {
      this.formReset = true;
      this.mentorSearchForm.get("type").setValue(this.pageType);
      if(this.pageType == "mentor") {
        await this.userService
          .filterMentorship(this.mentorSearchForm?.value)
          .subscribe((res: any) => {
            let filter = Object.assign(res, {type: this.pageType});
            this.userService.filteredData.next(filter);
        });
      } else if(this.pageType == "mentee") {
        await this.userService
        .filterMentee(this.mentorSearchForm?.value)
        .subscribe((res: any) => {
          let filter = Object.assign(res, {type: this.pageType});
          this.userService.filteredData.next(filter);
      });
      }
    }
  }
  /**
   * Function to reset form data
   */
  resetForm() {
    // let type = this.pageType;
    let action: string = 'resetFilter';
    let response: any =  Object.assign({action: action}, {type: this.pageType});
    this.dataService.resetForm.next(response);
    if(this.pageType == 'entrepreneurship' )  this.entrepreneurSearchForm.reset(this.buildForm());
    else if( this.pageType == 'mentor' || this.pageType == 'mentee') this.mentorSearchForm.reset(this.buildMentorshipSearch());
    else this.searchForm.reset(this.buildForm());
    this.formReset = false;
  }

    /**
     * Unsubscribe Subject / Destroy Observable
     */
    ngOnDestroy() {
      this.userService.destroyFilter();
    }

}
