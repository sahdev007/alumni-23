import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.scss']
})
export class SendMailComponent implements OnInit {
  form: FormGroup;
  currentUser: any;

  constructor(public dialogRef: MatDialogRef<SendMailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder) {
      if (localStorage) {
        this.currentUser = JSON.parse(localStorage.getItem("currentUser") || "");
      }
     }

  ngOnInit(): void {
    this.buildForm();
  }

  /**
   * Build form data
   */
  buildForm() {
    this.form = this.fb.group({
      id:[''],
      userId: [this.currentUser?.id],
      to:[this.data?.user?.id],
      subject:['', Validators.required],
    });
  }

  async save() {

  }

}
