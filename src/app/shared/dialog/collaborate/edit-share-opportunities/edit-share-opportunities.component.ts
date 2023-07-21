import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { CollaborateService } from 'src/app/services/collaborate.service';

@Component({
  selector: 'app-edit-share-opportunities',
  templateUrl: './edit-share-opportunities.component.html',
  styleUrls: ['./edit-share-opportunities.component.scss']
})
export class EditShareOpportunitiesComponent implements OnInit {
  shareOppForm: FormGroup;

  constructor(
    public fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, 
    private collaborateService: CollaborateService, private notifyService: TokenInterceptor,
    public dialog: MatDialog, public dialogref: MatDialogRef<EditShareOpportunitiesComponent>) { }

  ngOnInit(): void {
    this.buildForm();
    this.shareOppForm.patchValue({...this.data?.data});
  }

  buildForm () {
    this.shareOppForm = this.fb.group({
      id: [''],
      author: [''],
      positionsForInternship: ['', Validators.required],
      specialization: ['', Validators.required],
      stipend: [''],
      status: ['']
    });
  }

   /**
   * Function to Edit Special Project data
   */
  async save() {
    await this.collaborateService.updateData(this.data?.action, this.shareOppForm?.value).subscribe((x: any) => {
      if(x?.status == 200) {
        console.log('updated Successfully !');
        this.dialogref.close();
        this.notifyService.notificationService.success(x?.message);
      }
    });
  }
}
