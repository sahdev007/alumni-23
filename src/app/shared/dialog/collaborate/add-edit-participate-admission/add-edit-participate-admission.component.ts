import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CollaborateService } from 'src/app/services/collaborate.service';

@Component({
  selector: 'app-add-edit-participate-admission',
  templateUrl: './add-edit-participate-admission.component.html',
  styleUrls: ['./add-edit-participate-admission.component.scss']
})
export class AddEditParticipateAdmissionComponent implements OnInit {
  admissionPanelForm: FormGroup;
  submitted: boolean = false;

  constructor(public fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, public collaborateService: CollaborateService,
  public dialog: MatDialog, public dialogref: MatDialogRef<AddEditParticipateAdmissionComponent>,) { }

  ngOnInit(): void {
    console.log(this.data)
    this.buildForm();
    this.admissionPanelForm.patchValue({ ...this.data?.data });
  }

  buildForm() {
    this.admissionPanelForm = this.fb.group({
      id: [""],
      city: ['', Validators.required],
      location: ['', Validators.required],
      dateTime: ['', Validators.required],
      is_active: ["", Validators.required]
    });
  }

  async save() {
    this.submitted = true;
    if (this.data?.action === 'create-admission') {
      await this.collaborateService.postData(this.data?.action, this.admissionPanelForm.value).subscribe((res: any) => {
        if(res?.status == 200) {
          console.log('Admission Created Successfully !');
          this.dialogref.close();
        }
      });
    } else {
      let params = {
        id : this.data?.data?.id,
        ...this.admissionPanelForm?.value
      }
      await this.collaborateService.updateData(this.data?.action, params).subscribe((res: any) => {
        if (res?.status === 200) {
          console.log('updated Successfully !');
          this.dialogref.close();
        }
      });
    }
  }
}
