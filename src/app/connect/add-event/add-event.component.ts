import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { ConnectService } from 'src/app/services/connect.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  addEventForm: FormGroup;
  eventPic: any;
  image: any;
  updateEventTypes: any;
  submitted: boolean = false;
  currentUser: any;
  author: any;
  newEventId: any;
  updateAction: any;
  updatedEventData: any;
  loading: boolean;

  eventStat = [{id:1, value:'active'}, {id:2, value:'inActive'}]

  constructor(public fb: FormBuilder, private connectService: ConnectService,
    public router: Router, public arouter: ActivatedRoute,
    private notify: TokenInterceptor) {
    if (localStorage) {
      this.currentUser = JSON?.parse(
        localStorage?.getItem("currentUser") || ""
      );
    }
   }

  ngOnInit() {
    this.buildForm();
    this.getAllEventTypes();
    $.getScript('./assets/js/form-validations.js');
    $.getScript('./assets/js/bs-custom-file-input.min.js');

    let fname = this.currentUser?.first_name;
    let lname = this.currentUser?.last_name;
    let mname = this.currentUser?.middle_name;
    this.author = fname + (mname == null ? "" : " " + mname) + " " + lname;

    this.arouter.queryParams.subscribe((res: any) => {
      this.newEventId = res?.clubId;
      this.updateAction = res?.action;
      if(this.newEventId) this.getSingleEvent(this.newEventId);
    });
  }

  async getSingleEvent(id) {
    this.loading = true;
    await this.connectService.getDataById('single-event', id).subscribe((res:any) => {

      if(res?.status == 200) {
        this.updatedEventData = res?.data;
        this.addEventForm.patchValue({...this.updatedEventData});
        this.loading = false;
      }
    }, error => {
      this.loading = false;
    });
  }

  buildForm() {
    this.addEventForm = this.fb.group({
      id: [''],
      author: [this.author],
      title: ["", Validators.required],
      venue: ["", Validators.required],
      category: ["admin"],
      description: ["", Validators.required],
      date: ["", Validators.required],
      time: [""],
      eventsType_id: ["", Validators.required],
      eventHost: [""],
      eventAttend: [""],
      cost: ["", Validators.required],
      eventPageLink: [""],
      status: [""],
      contactNumber: ["", [Validators.minLength(10), Validators.maxLength(16)]],
      eventImage: [""],
    });
  }

  get f() {
    return this.addEventForm.controls;
  }
    /**
   * Function to Upload image
   * @param event
   */
    onUploadImage(event: any) {
      this.eventPic = event.target.files[0];
      if (event?.target?.files && event?.target?.files[0]) {
        this.eventPic = event?.target?.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (_event) => {
          this.image = _event.target?.result;
        };
      }
    }

    async getAllEventTypes() {
      let action: string = "all-eventType";
      await this.connectService.getAllData(action).subscribe((res: any) => {
        this.updateEventTypes = res?.data?.filter((x: any) => {return x?.status == "active"});
      },error => {
          this.notify.notificationService.error(error);
      })
    }

    async addEvent() {
      this.submitted = true;
      let action = {
        action: this.updateAction == 'update-event' ? 'update-event' : 'create-event',
        id: this.updateAction == 'update-event' ? parseInt(this.newEventId) : ''
      }
      if(this.addEventForm.invalid){
        return;
      } else {
        let formData = new FormData();
        formData.append('id', action?.action === 'create-event' ? '' : this.newEventId );
        formData.append("eventImage", (this.eventPic) ? this.eventPic : '' );
        formData.append("author", this.addEventForm?.value?.author);
        formData.append("title", this.addEventForm?.value?.title);
        formData.append("description", this.addEventForm?.value?.description);
        formData.append("date", this.addEventForm?.value?.date);
        formData.append("venue", this.addEventForm?.value?.venue);
        formData.append("cost", this.addEventForm?.value?.cost);
        formData.append("status", this.addEventForm?.value?.status);
        formData.append("type", this.addEventForm?.value?.type);
        formData.append("time", this.addEventForm?.value?.time);
        formData.append("contactNumber", this.addEventForm?.value?.contactNumber);
        formData.append("eventPageLink", this.addEventForm?.value?.eventPageLink);
        formData.append("eventHost", this.addEventForm?.value?.eventHost);
        formData.append("category", this.addEventForm?.value?.category);
        formData.append("eventsType_id", this.addEventForm?.value?.eventsType_id);
      

        await this.connectService.postData(action, formData).subscribe((res:any) => {
          if(res?.status == 200){
            this.notify.notificationService.success(res?.message);
            this.router.navigate(['/connect/admin-events']);
          }
        },error => {
          this.notify.notificationService.error(error);
        });
      }
    }

    clickToBack(){
      this.router.navigate(['/connect/admin-events']);
    }
}
