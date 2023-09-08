import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessVenturesComponent } from './business-ventures/business-ventures.component';
import { InviteBatchmatesComponent } from './invite-batchmates/invite-batchmates.component';
import { ClubsComponent } from './clubs/clubs.component';
import { AddClubTypeComponent } from './add-club-type/add-club-type.component';
import { AddClubsComponent } from './add-clubs/add-clubs.component';
import { EditBusinessVenturesComponent } from './edit-business-ventures/edit-business-ventures.component';
import { ViewBusinessVenturesComponent } from './view-business-ventures/view-business-ventures.component';
import { AddEditClubTypeComponent } from './add-edit-club-type/add-edit-club-type.component';
import { ViewClubTypeComponent } from './view-club-type/view-club-type.component';
import { ViewClubComponent } from './view-club/view-club.component';

const routes: Routes = [
  { 
    path: '',
    children: [
      {
        path: 'business-ventures',
        component: BusinessVenturesComponent,
        data: {
          title: 'Business Ventures'
        }
      },
      {
        path: 'edit-business-ventures',
        component: EditBusinessVenturesComponent,
        data: {
          title: 'Edit Business Ventures'
        }
      },
      {
        path: 'view-business-ventures',
        component: ViewBusinessVenturesComponent
      },
      {
        path: 'clubs',
        component: ClubsComponent
      },
      {
        path: 'view-club',
        component: ViewClubComponent
      },
      {
        path: 'add-clubs',
        component: AddClubsComponent
      },
      {
        path: 'club-types',
        component: AddClubTypeComponent
      },
      {
        path: 'add-edit-club-type',
        component: AddEditClubTypeComponent
      },
      {
        path: 'view-club-type',
        component: ViewClubTypeComponent
      },
      {
        path: 'invite-batchmates',
        component: InviteBatchmatesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule { }
