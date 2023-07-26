import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsRoutingModule } from './about-us-routing.module';

import { MatMenuModule } from '@angular/material/menu';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from '../shared/shared.module';
import { LeadershipComponent } from './leadership/leadership.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    LeadershipComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    CdkTableModule,
    MatTableModule,
    MatPaginatorModule ,
    MatSortModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,

    SharedModule
  ]
})
export class AboutUsModule { }
