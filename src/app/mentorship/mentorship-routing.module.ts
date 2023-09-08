import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentorComponent } from './mentor/mentor.component';
import { MenteeComponent } from './mentee/mentee.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'mentor',
        component: MentorComponent
      },
      {
        path: 'mentee',
        component: MenteeComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorshipRoutingModule { }
