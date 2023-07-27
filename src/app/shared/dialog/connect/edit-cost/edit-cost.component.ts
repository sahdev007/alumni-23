import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { ConnectService } from 'src/app/services/connect.service';

@Component({
  selector: 'app-edit-cost',
  templateUrl: './edit-cost.component.html',
  styleUrls: ['./edit-cost.component.scss']
})
export class EditCostComponent implements OnInit {
  form: FormGroup;
  constructor(public dialogRef: MatDialogRef<EditCostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder, private connectService: ConnectService, private notifyService: TokenInterceptor) { }

  ngOnInit(): void {
    this.buildForm();
    this.form.patchValue({...this.data?.data});
  }

  buildForm() {
    this.form = this.fb.group({
      id: ['', Validators.required],
      cost: ['', Validators.required]
    });
  }

  async save() {
    let action: string = "update-event";
    await this.connectService.postData(action, this.form?.value).subscribe((item: any) => {
      if(item?.status == 200){
        this.dialogRef.close();
        this.notifyService.notificationService.success(item?.message);
      }
    }, error => {
        this.notifyService.notificationService.error(error);
    });
  }
}
