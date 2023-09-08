import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaderboardRoutingModule } from './leaderboard-routing.module';
import { DetailComponent } from './detail/detail.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    LeaderboardRoutingModule,
    FormsModule
  ]
})
export class LeaderboardModule { }
