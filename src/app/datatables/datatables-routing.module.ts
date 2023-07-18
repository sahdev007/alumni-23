import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTableComponent } from './all-table/all-table.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'table',
        component: AllTableComponent,
        data: {
          title: 'Test Tables'
        }
      }      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatatablesRoutingModule { }
