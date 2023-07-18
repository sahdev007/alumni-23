import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogsByDateComponent } from './logs-by-date/logs-by-date.component';
import {LogViewerDashboardComponent} from './log-viewer-dashboard/log-viewer-dashboard.component'

const routes: Routes = [
  {
    path: '',
    children: [
  
      {
        path: 'log-viewer-dashboard',
        component: LogViewerDashboardComponent,
        data: {
          title: 'log viewer dashboard'
        }
      },
      {
        path: 'logs-by-date',
        component: LogsByDateComponent,
        data: {
          title: 'logs by date'
        }
      },
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogViewerRoutingModule { }
