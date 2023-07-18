import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-editcontactdialog',
  templateUrl: './editcontactdialog.component.html',
  styleUrls: ['./editcontactdialog.component.scss']
})
export class EditcontactdialogComponent implements OnInit {

  formInstance: FormGroup;

  constructor(public dialogRef: MatDialogRef<EditcontactdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Person,
    public fb: FormBuilder) {  
    //    this.formInstance = new FormGroup({
    //   "id":  new FormControl('', Validators.required),
    //   "firstName": new FormControl('', Validators.required),
    //   "age": new FormControl('', Validators.required),
    //   "job": new FormControl('', Validators.required),
    //   "designation": new FormControl('', Validators.required),
    // });

    // this.formInstance.setValue(data);
  }

  ngOnInit(): void {
    console.log(this.data);
    this.buildForm();
    this.formInstance.patchValue({
      ...this.data
    })
  }

  buildForm() {
    this.formInstance = this.fb.group({
      id: ['', Validators.required],
      firstName: ['', Validators.required],
      age: ['', Validators.required],
      job: ['', Validators.required],
      designation: ['', Validators.required]
    });
  }
  save(): void {
    this.dialogRef.close(Object.assign(new Person(), this.formInstance.value));
  }
}
