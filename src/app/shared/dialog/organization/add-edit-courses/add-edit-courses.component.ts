import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OrganizationService } from 'src/app/services/organization.service';

@Component({
  selector: 'app-add-edit-courses',
  templateUrl: './add-edit-courses.component.html',
  styleUrls: ['./add-edit-courses.component.scss']
})
export class AddEditCoursesComponent implements OnInit {

  form: FormGroup;
  submitted: boolean = false;

  constructor(public dialogRef: MatDialogRef<AddEditCoursesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    private organizationService: OrganizationService) {  

  }

  ngOnInit(): void {
    console.log(this.data)
    this.buildForm();
    this.form.patchValue({
      ...this.data?.data
    });
  }

  buildForm() {
    this.form = this.fb.group({
      id: [''],
      course: ['', Validators.required],
      status: ['', Validators.required],
      type: [this.data?.type]
    });
  }

  get f() {
    return this.form.controls;
  }

    /**
   * Function to create/update event type
   */
    async save() {
      let action: string = this.data?.action == "create-course" ? 'create-course' : 'update-course';
      await this.organizationService.postData(action, this.form?.value).subscribe((item: any) => {
        if(item.status == 200){
          console.log('Courses created')
          this.dialogRef.close();
        }
      }, error => {
          console.log(error);
      });
    }
}
