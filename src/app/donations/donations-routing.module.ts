import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonationsListComponent } from './donations-list/donations-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'donations-list',
        component: DonationsListComponent
      }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class donationsRoutingModule { }
