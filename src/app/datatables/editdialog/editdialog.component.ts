import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-editdialog',
  templateUrl: './editdialog.component.html',
  styleUrls: ['./editdialog.component.scss']
})
export class EditdialogComponent implements OnInit {

  formInstance: FormGroup;

  constructor(public dialogRef: MatDialogRef<EditdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Person) {     this.formInstance = new FormGroup({
      "id":  new FormControl('', Validators.required),
      "firstName": new FormControl('', Validators.required),
      "age": new FormControl('', Validators.required),
      "job": new FormControl('', Validators.required),
    });

    this.formInstance.setValue(data);}

  ngOnInit(): void {
  }

  save(): void {
    this.dialogRef.close(Object.assign(new Person(), this.formInstance.value));
  }
}
