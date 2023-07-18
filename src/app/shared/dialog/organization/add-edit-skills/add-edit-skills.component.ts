import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OrganizationService } from 'src/app/services/organization.service';

@Component({
  selector: 'app-add-edit-skills',
  templateUrl: './add-edit-skills.component.html',
  styleUrls: ['./add-edit-skills.component.scss']
})
export class AddEditSkillsComponent implements OnInit {

  form: FormGroup;
  submitted: boolean = false;

  constructor(public dialogRef: MatDialogRef<AddEditSkillsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    private organizationService: OrganizationService) {  

  }

  ngOnInit(): void {
    this.buildForm();
    this.form.patchValue({
      ...this.data?.data
    });
  }

  buildForm() {
    this.form = this.fb.group({
      id: [''],
      skill: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  get f() {
    return this.form.controls;
  }

    /**
   * Function to create/update event type
   */
    async save() {
      let action: string = this.data?.action == "create-skill" ? 'create-skill' : 'update-skill';
      await this.organizationService.postData(action, this.form?.value).subscribe((item: any) => {
        if(item.status == 200){
          console.log('Skills created')
          this.dialogRef.close();
        }
      }, error => {
          console.log(error);
      });
    }
}
