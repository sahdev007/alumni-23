import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventTypesComponent } from './event-types/event-types.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AdminEventComponent } from './admin-event/admin-event.component';
import { AlumniEventComponent } from './alumni-event/alumni-event.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'admin-events',
        component: AdminEventComponent,
        data: {
          title: 'Admin Events'
        }
      },
      {
        path: 'alumni-events',
        component: AlumniEventComponent,
        data: {
          title: 'Alumni Events'
        }
      },
      {
        path: 'add-event',
        component: AddEventComponent,
        data: {
          title: 'Event'
        }
      },
      {
        path: 'add-event-types',
        component: EventTypesComponent,
        data: {
          title: 'Event Types'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectRoutingModule { }
