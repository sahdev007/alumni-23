import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatatablesRoutingModule } from './datatables-routing.module';
import { AllTableComponent } from './all-table/all-table.component';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';


import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EditdialogComponent } from './editdialog/editdialog.component';


@NgModule({
  declarations: [
    AllTableComponent,
    EditdialogComponent,
  ],
  imports: [
    CommonModule,
    DatatablesRoutingModule,

    CdkTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule
  ],
  entryComponents: [EditdialogComponent],
})
export class DatatablesModule { }
