import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeyContactComponent } from './key-contact/key-contact.component';
import { SbupAlumniSocialChannelComponent } from './sbup-alumni-social-channel/sbup-alumni-social-channel.component';
import { AddEditKeyContactComponent } from './add-edit-key-contact/add-edit-key-contact.component';
import { AddEditSocialChannelComponent } from './add-edit-social-channel/add-edit-social-channel.component';
import { ViewSbupAlumniSocialChannelComponent } from './view-sbup-alumni-social-channel/view-sbup-alumni-social-channel.component';
import { ViewKeyContactComponent } from './view-key-contact/view-key-contact.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'key-contact',
        component: KeyContactComponent
      },
      {
        path: 'add-edit-key-contact',
        component: AddEditKeyContactComponent
      },
      {
        path: 'view-key-contact',
        component: ViewKeyContactComponent
      },
      {
        path: 'sbup-alumni-social-channel',
        component: SbupAlumniSocialChannelComponent
      },
      {
        path: 'add-edit-social-channel',
        component: AddEditSocialChannelComponent
      },
      {
        path: 'view-social-channel',
        component: ViewSbupAlumniSocialChannelComponent
      }      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
