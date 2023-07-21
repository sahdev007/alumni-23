import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { ConnectService } from 'src/app/services/connect.service';

@Component({
  selector: 'app-add-edit-event-type',
  templateUrl: './add-edit-event-type.component.html',
  styleUrls: ['./add-edit-event-type.component.scss']
})
export class AddEditEventTypeComponent implements OnInit {
  addEventTypeForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddEditEventTypeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder, private connectService: ConnectService, private notifyService: TokenInterceptor) { 
  }

  ngOnInit(): void {
    this.buildForm();
    this.addEventTypeForm.patchValue({...this.data.data});
  }

  buildForm() {
    this.addEventTypeForm = this.fb.group({
      id: ['', Validators.required],
      type: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  /**
   * Function to create/update event type
   */
  async save() {
    let action: string = this.data?.action == "create-eventType" ? 'create-eventType' : 'update-eventType';
    await this.connectService.postData(action, this.addEventTypeForm?.value).subscribe((item: any) => {
      if(item?.status == 200){
        this.dialogRef.close();
        this.notifyService.notificationService.success(item?.message);
      }
    }, error => {
        this.notifyService.notificationService.error(error);
    });
  }


}
