import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { CommunityService } from 'src/app/services/community.service';
import { Config } from 'src/app/services/config';

@Component({
  selector: 'app-add-edit-club-type',
  templateUrl: './add-edit-club-type.component.html',
  styleUrls: ['./add-edit-club-type.component.scss']
})
export class AddEditClubTypeComponent implements OnInit {

  clubTypeForm: FormGroup;
  submitted:boolean;
  clubId: any;
  clubData: any;
  pageType: any;
  status: any;
  loading: boolean;

  constructor(public fb: FormBuilder, public notifyService: TokenInterceptor, 
    private communityServie: CommunityService, public arouter: ActivatedRoute,
    public router: Router, private config: Config) { 
      this.status = this.config?.status;
    }

  async ngOnInit() {
    this.buildForm();
    this.arouter.queryParams.subscribe((res: any) => {
      this.pageType = res?.action;
      this.clubId = res?.id;
    });
    /**Get and single team data and Patch with form */
      if(this.clubId) {
        this.loading = true;
        let action: string = "single-clubType";
        await this.communityServie.getDataById(action, this.clubId).subscribe((x: any) => {
            this.clubData = x?.data;
            setTimeout(() => {
              this.clubTypeForm.patchValue({...this.clubData});
              this.loading = false;
            }, 500);
        });
    }
  }
  /**
   * Build Form
   */
  buildForm() {
    this.clubTypeForm = this.fb.group({
      id: [''],
      type: ['', Validators.required],
      status: ['', Validators.required]
    });
  }  
/**
 * Function to Add/Edit club Type
 * @returns 
 */
  async save() {
    this.submitted = true;
    if(this.clubTypeForm.invalid) {
      return
    } else {
      if(!this.clubId) {
        await this.communityServie.postData(this.pageType, this.clubTypeForm?.value).subscribe((res: any) => {
          if(res?.status == 200) {
            this.notifyService.notificationService.success(res?.message);
            this.router.navigate(['/community/club-types']);
          }
        });
      } else {
        
        await this.communityServie.updateData(this.pageType, this.clubTypeForm?.value).subscribe((res: any) => {
          if(res?.status == 200) {
            this.notifyService.notificationService.success(res?.message);
            this.router.navigate(['/community/club-types']);
          }
        });
      }
    }
  }
}
