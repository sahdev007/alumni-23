import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadershipComponent } from './leadership/leadership.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'leadership-team',
        component: LeadershipComponent
      }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
