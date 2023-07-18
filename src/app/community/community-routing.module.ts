import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessVenturesComponent } from './business-ventures/business-ventures.component';
import { InviteBatchmatesComponent } from './invite-batchmates/invite-batchmates.component';
import { ClubsComponent } from './clubs/clubs.component';
import { AddClubTypeComponent } from './add-club-type/add-club-type.component';
import { AddClubsComponent } from './add-clubs/add-clubs.component';
import { EditBusinessVenturesComponent } from './edit-business-ventures/edit-business-ventures.component';

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
        path: 'clubs',
        component: ClubsComponent,
        data: {
          title: 'clubs'
        }
      },
      {
        path: 'add-clubs',
        component: AddClubsComponent,
        data: {
          title: 'Add clubs'
        }
      },
      {
        path: 'add-club-type',
        component: AddClubTypeComponent,
        data: {
          title: 'Add clubs type'
        }
      },
      {
        path: 'invite-batchmates',
        component: InviteBatchmatesComponent,
        data: {
          title: 'Invite batchmates'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule { }
