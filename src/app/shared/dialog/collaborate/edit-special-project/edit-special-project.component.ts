import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CollaborateService } from 'src/app/services/collaborate.service';

@Component({
  selector: 'app-edit-special-project',
  templateUrl: './edit-special-project.component.html',
  styleUrls: ['./edit-special-project.component.scss']
})
export class EditSpecialProjectComponent implements OnInit {

  editSpecialForm: FormGroup;
  submitted: boolean = false;

  constructor(
    public dialogref: MatDialogRef<EditSpecialProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public fb: FormBuilder,
    private collaborateService : CollaborateService
  ) { }

  ngOnInit(): void {
    console.log(this.data)
    this.buildForm();
    this.editSpecialForm.patchValue({...this.data?.data});
  }

  buildForm() {
    this.editSpecialForm = this.fb.group({
      id: [''],
      author: [''],
      title: ['', Validators.required],
      charityName: ['', Validators.required],
      monetaryDonation: [false],
      timeDonation: [false],
      contactName: ['', Validators.required],
      code: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(16)]],
      email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")]],
      link: ['', Validators.required],
      is_active: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  /**
   * Function to Edit Special Project data
   */
  async save() {
    this.submitted = true;
    await this.collaborateService.updateData(this.data?.action, this.editSpecialForm.value).subscribe((x: any) => {
      if(x?.status == 200) {
        console.log('updated Successfully !');
        this.dialogref.close();
      }
    });
  }
}
