import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadershipComponent } from './leadership/leadership.component';
import { AddEditLeadershipComponent } from './add-edit-leadership/add-edit-leadership.component';
import { ViewLeadershipComponent } from './view-leadership/view-leadership.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'leadership-team',
        component: LeadershipComponent  
      },
      {
        path: 'add-edit-leadership',
        component: AddEditLeadershipComponent  
      },
      {
        path: 'view-leadership',
        component: ViewLeadershipComponent  
      }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
