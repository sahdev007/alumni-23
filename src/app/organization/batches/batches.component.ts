import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from 'src/app/models/person';
import { OrganizationService } from 'src/app/services/organization.service';
import { DeletedialogComponent } from 'src/app/shared/dialog/deletedialog/deletedialog.component';
import { AddEditBatchesComponent } from 'src/app/shared/dialog/organization/add-edit-batches/add-edit-batches.component';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.scss']
})
export class BatchesComponent implements OnInit {

  public status = 'active';
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public displayedColumns: string[] = ['batch'];
  public columnsToDisplay: string[] = [...this.displayedColumns, 'actions'];

  public columnsFilters = {};

  public dataSource: MatTableDataSource<Person>;
  // private serviceSubscribe: Subscription;

  constructor(
    private organizationService: OrganizationService, 
    public dialog: MatDialog
    ) {
    this.dataSource = new MatTableDataSource<Person>();
  }


  private filter() {

    this.dataSource.filterPredicate = (data: Person, filter: string) => {
      let find = true;

      for (var columnName in this.columnsFilters) {

        let currentData = "" + data[columnName];

        //if there is no filter, jump to next loop, otherwise do the filter.
        if (!this.columnsFilters[columnName]) {
          // return;
        }


        let searchValue = this.columnsFilters[columnName]["contains"];

        if (!!searchValue && currentData.indexOf("" + searchValue) < 0) {
          find = false;
          //exit loop
          // return;
        }

        searchValue = this.columnsFilters[columnName]["equals"];
        if (!!searchValue && currentData != searchValue) {
          find = false;
          //exit loop
          // return;
        }

        searchValue = this.columnsFilters[columnName]["greaterThan"];
        if (!!searchValue && currentData <= searchValue) {
          find = false;
          //exit loop
          // return;
        }

        searchValue = this.columnsFilters[columnName]["lessThan"];
        if (!!searchValue && currentData >= searchValue) {
          find = false;
          //exit loop
          // return;
        }

        searchValue = this.columnsFilters[columnName]["startWith"];

        if (!!searchValue && !currentData.startsWith("" + searchValue)) {
          find = false;
          //exit loop
          // return;
        }

        searchValue = this.columnsFilters[columnName]["endWith"];
        if (!!searchValue && !currentData.endsWith("" + searchValue)) {
          find = false;
          //exit loop
          // return;
        }

      }

      return find;
    };

    this.dataSource.filter = null;
    this.dataSource.filter = 'activate';

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /**
   * Create a filter for the column name and operate the filter action.
   */
  applyFilter(columnName: string, operationType: string, searchValue: string) {
    this.columnsFilters[columnName] = {};
    this.columnsFilters[columnName][operationType] = searchValue;
    this.filter();
  }

  /**
   * clear all associated filters for column name.
   */
  clearFilter(columnName: string) {
    if (this.columnsFilters[columnName]) {
      delete this.columnsFilters[columnName];
      this.filter();
    }
  }

  add(params: any, action?: string) {
    const dialogRef = this.dialog.open(AddEditBatchesComponent, {
      width: '400px',
      data: { data: params, action: action }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ngOnInit();
      }
    });
  }


  edit(data: any, params: any) {
    const dialogRef = this.dialog.open(AddEditBatchesComponent, {
      width: '400px',
      data: {data: data, action: params}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ngOnInit();
      }
    });
  }

  delete(data: any, params: string) {
    let action: string = "delete-batch";
    const dialogRef = this.dialog.open(DeletedialogComponent, {
      width: '400px',
      data: { data: data, info: params }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.organizationService.deleteData(action, data?.id).subscribe((res: any) => {
          if(res?.status == 200) {
            console.log('Deleted Successfully !');
            this.ngOnInit();
          } 
        })
      }
    });
  }


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * initialize data-table by providing persons list to the dataSource.
   */
  ngOnInit(): void {
    this.getAllData();
  }

  async getAllData() {
    let action = "all-batch";
    await this.organizationService.getAllData(action).subscribe(
      (batch: any) => {
        if(batch?.status == 200) this.dataSource.data = batch?.BatchYear;
      },
      (error) => {
        // this.interceptor.notificationService.openFailureSnackBar(error);
      }
    );
  }

  ngOnDestroy(): void {
    // this.serviceSubscribe.unsubscribe();
  }
  
}
