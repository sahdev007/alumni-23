import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeyContactComponent } from './key-contact/key-contact.component';
import { SbupAlumniSocialChannelComponent } from './sbup-alumni-social-channel/sbup-alumni-social-channel.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'key-contact',
        component: KeyContactComponent,
        data: {
          title: 'Key contact'
        }
      },
      {
        path: 'sbup-alumni-social-channel',
        component: SbupAlumniSocialChannelComponent,
        data: {
          title: 'sbup-alumni-social-channel'
        }
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
