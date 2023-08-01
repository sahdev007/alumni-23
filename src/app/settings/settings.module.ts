import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { GeneralComponent } from './general/general.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [GeneralComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    EditorModule,
    NgbModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class SettingsModule { }
