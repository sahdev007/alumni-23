import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CollaborateService } from 'src/app/services/collaborate.service';

@Component({
  selector: 'app-add-edit-job-type',
  templateUrl: './add-edit-job-type.component.html',
  styleUrls: ['./add-edit-job-type.component.scss']
})
export class AddEditJobTypeComponent implements OnInit {

  jobForm: FormGroup;
  submitted: boolean = false;

  constructor(public dialogRef: MatDialogRef<AddEditJobTypeComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public fb: FormBuilder,
    private collaborateService: CollaborateService) { }

  ngOnInit(): void {
    this.buildForm();
    this.jobForm.patchValue({
      ...this.data?.info
    })
  }

  buildForm() {
    this.jobForm = this.fb.group({
      id: [''],
      type: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  async save() {
    this.submitted = true;

    if(this.data?.action == "create-jobType") {
      await this.collaborateService.postData(this.data?.action, this.jobForm?.value).subscribe((res: any) => {
        if(res?.status == 200) {
          this.dialogRef.close();
        }
      });
    } else {     
      await this.collaborateService.updateData(this.data?.action, this.jobForm.value).subscribe((res: any) => {
        if(res?.status == 200) {
          this.dialogRef.close();
        }
      });
    }
  }
}
