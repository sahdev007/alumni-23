import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/person';
import { CollaborateService } from 'src/app/services/collaborate.service';
import { AddEditJobTypeComponent } from 'src/app/shared/dialog/collaborate/add-edit-job-type/add-edit-job-type.component';
import { ViewJobTypeComponent } from 'src/app/shared/dialog/collaborate/view-job-type/view-job-type.component';
import { DeletedialogComponent } from 'src/app/shared/dialog/deletedialog/deletedialog.component';

@Component({
  selector: 'app-add-job-type',
  templateUrl: './add-job-type.component.html',
  styleUrls: ['./add-job-type.component.scss']
})
export class AddJobTypeComponent implements OnInit {
  public status = 'active';
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // public displayedColumns: string[] = ['autho', 'title', 'description', 'type', 'price', 'attendHost'];
  public displayedColumns: string[] = ['type'];
  public columnsToDisplay: string[] = [...this.displayedColumns, 'status', 'actions'];

  /**
   * it holds a list of active filter for each column.
   * example : {firstName: {contains : 'person 1'}}
   **/
  public columnsFilters = {};

  public dataSource: MatTableDataSource<Person>;
  // private serviceSubscribe: Subscription;

  constructor(
    public dialog: MatDialog,
    private collaborateService: CollaborateService,
    public router: Router
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

  add(data: any, action: string){
    const dialogRef = this.dialog.open(AddEditJobTypeComponent, {
      width: '380px',
      data: {action: action}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ngOnInit();
      }
    });
  }

  edit(data: any, params: any) {
    const dialogRef = this.dialog.open(AddEditJobTypeComponent, {
      width: '380px',
      data: {info: data, action: params}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ngOnInit();
      }
    });
  }

  view(params: any){ 
    const dialogRef = this.dialog.open(ViewJobTypeComponent, {
      width: '450px',
      data: {data: params}
    });
  }

  delete(data: any, params: string) {
    let action: string = "delete-jobType";
    const dialogRef = this.dialog.open(DeletedialogComponent, {
      width: '400px',
      data: { data: params, info: params }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.collaborateService.deleteData(action, data?.id).subscribe((res: any) => {
          if(res?.status == 200) {
            console.log('Deleted Successfully !');
            this.ngOnInit();
          } 
        })
      }
    });
  }

  async onStatusChange(e:any, params: any) {
    let action = "update-jobType";
      let param = {
        id: params?.id,
        status: e?.target?.value
      }
      
      await this.collaborateService.updateData(action, param).subscribe((res: any) => {
        if(res?.status == 200) {
          this.ngOnInit();
        }
      }, error => {
          console.log(error);
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
    let action = "all-jobType";
    await this.collaborateService.getAllData(action).subscribe(
      (res: any) => {
        if(res?.status == 200) {
          this.dataSource.data = res?.data;
        } 
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
