import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonationsListComponent } from './donations-list/donations-list.component';
import { SharedModule } from '../shared/shared.module';
import { donationsRoutingModule } from './donations-routing.module';



@NgModule({
  declarations: [DonationsListComponent],
  imports: [
    CommonModule,
    SharedModule,
    donationsRoutingModule
  ]
})
export class DonationsModule { }
