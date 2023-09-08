import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventTypesComponent } from './event-types/event-types.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AdminEventComponent } from './admin-event/admin-event.component';
import { AlumniEventComponent } from './alumni-event/alumni-event.component';
import { ViewEventComponent } from './view-event/view-event.component';
import { AddEditEventTypeComponent } from './add-edit-event-type/add-edit-event-type.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'admin-events',
        component: AdminEventComponent
      },
      {
        path: 'alumni-events',
        component: AlumniEventComponent
      },
      {
        path: 'add-event',
        component: AddEventComponent
      },
      {
        path: 'view-event',
        component: ViewEventComponent
      },
      {
        path: 'add-event-types',
        component: EventTypesComponent
      },
      {
        path: 'add-edit-event-types',
        component: AddEditEventTypeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectRoutingModule { }
