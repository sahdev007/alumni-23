import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonationsListComponent } from './donations-list/donations-list.component';
import { ViewDonationComponent } from './view-donation/view-donation.component';
import { AddEditDonationComponent } from './add-edit-donation/add-edit-donation.component';
import { DonationsCategoryComponent } from './donations-category/donations-category.component';
import { AddEditDonationsCategoryComponent } from './add-edit-donations-category/add-edit-donations-category.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'donations-list',
        component: DonationsListComponent
      },
      {
        path: 'add-edit-donations',
        component: AddEditDonationComponent
      },
      {
        path: 'view-donations',
        component: ViewDonationComponent
      },
      {
        path: 'donations-category',
        component: DonationsCategoryComponent
      },
      {
        path: 'add-edit-donations-category',
        component: AddEditDonationsCategoryComponent
      },
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class donationsRoutingModule { }
