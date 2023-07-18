import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FounderChancellorComponent } from './founder-chancellor/founder-chancellor.component';
import { SbupComponent } from './sbup/sbup.component';
import { LeadershipComponent } from './leadership/leadership.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'founder-chancellor',
        component: FounderChancellorComponent
      },
      {
        path: 'sbup',
        component: SbupComponent
      },
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
