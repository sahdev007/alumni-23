import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { Config } from 'src/app/services/config';
import { ConnectService } from 'src/app/services/connect.service';

@Component({
  selector: 'app-add-edit-event-type',
  templateUrl: './add-edit-event-type.component.html',
  styleUrls: ['./add-edit-event-type.component.scss']
})
export class AddEditEventTypeComponent implements OnInit {
  loading:boolean;
  status: any;
  eventId: any;
  eventData: any;
  eventTypeForm: FormGroup;
  pageType:any;
  constructor(public fb: FormBuilder, public notifyService: TokenInterceptor, 
    private connectServie: ConnectService, public arouter: ActivatedRoute,
    public router: Router, private config: Config) { 
      this.status = this.config?.status;
    }


  async ngOnInit() {
    this.loading = true;
    this.buildForm();
    this.arouter.queryParams.subscribe((res: any) => {
      console.log(res);
      this.pageType = res?.action;
      this.eventId = res?.id;
    });
    /**Get and single team data and Patch with form */
      if(this.eventId) {
        let action: string = "single-eventType";
        await this.connectServie.getDataById(action, this.eventId).subscribe((x: any) => {
            this.eventData = x?.data;
            setTimeout(() => {
              this.eventTypeForm.patchValue({...this.eventData});
            }, 500);
        });
    }
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

  /**
   * Function to Build Form data
   */
  buildForm() {
    this.eventTypeForm = this.fb.group({
      id: [''],
      type: ['', Validators.required],
      status: ['', Validators.required]
    })
  }

    /**
   * Function to create/update event type
   */
    async save() {
      let action: string = this.pageType == "update-eventType" ? 'update-eventType': 'create-eventType';
      await this.connectServie.postData(action, this.eventTypeForm?.value).subscribe((item: any) => {
        if(item?.status == 200){
          this.notifyService.notificationService.success(item?.message);
          this.router.navigate(['/connect/add-event-types']);
        }
      }, error => {
          this.notifyService.notificationService.error(error);
      });
    }
}
