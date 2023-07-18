import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { GeneralComponent } from './general/general.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [GeneralComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    EditorModule,
    NgbModule,
  ]
})
export class SettingsModule { }
