import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { Person } from 'src/app/models/person';
import { CommunityService } from 'src/app/services/community.service';
import { Config } from 'src/app/services/config';
import { AddEditClubTypeComponent } from 'src/app/shared/dialog/community/add-edit-club-type/add-edit-club-type.component';
import { ViewClubTypeComponent } from 'src/app/shared/dialog/community/view-club-type/view-club-type.component';
import { DeletedialogComponent } from 'src/app/shared/dialog/deletedialog/deletedialog.component';

@Component({
  selector: 'app-add-club-type',
  templateUrl: './add-club-type.component.html',
  styleUrls: ['./add-club-type.component.scss']
})
export class AddClubTypeComponent implements OnInit {
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public displayedColumns: string[] = ['type'];
  public columnsToDisplay: string[] = [...this.displayedColumns, 'status', 'actions'];

  /**
   * it holds a list of active filter for each column.
   * example : {firstName: {contains : 'person 1'}}
   **/
  public columnsFilters = {};

  public dataSource: MatTableDataSource<Person>;
  status: any;
  constructor(
    public dialog: MatDialog,
    private communityService: CommunityService,
    public router: Router,
    private notify: TokenInterceptor,
    private config: Config
    ) {
      this.status = this.config?.status;
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
/**
 * Functiont to Add Club Type
 * @param params 
 * @param action 
 */
  async add(params: any, action?: string) {
    const dialogRef = this.dialog.open(AddEditClubTypeComponent, {
      width: '400px',
      data: {data: params, action: action}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ngOnInit();
      }
    });
  }
  /**
   * Function to view Club type detail
   * @param param 
   */
  view(param: any) {
    const dialogRef = this.dialog.open(ViewClubTypeComponent, {
      width: '400px',
      data: {data: param}
    });
  }
/**
 * Function to update Club Type
 * @param data 
 * @param params 
 */
  edit(data: any, params: string) {
    const dialogRef = this.dialog.open(AddEditClubTypeComponent, {
      width: '400px',
      data: {data: data, action: params}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        setTimeout(() => {
          this.ngOnInit();
        }, 400);
      }
    });
  }

  /**
   * Delete Club type by ID
   * @param params 
   * @param type 
   */
  delete(params: any, type: string) {
    let action: string = "delete-clubType";
    const dialogRef = this.dialog.open(DeletedialogComponent, {
      width: '400px',
      data: { info: type }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.communityService.deleteData(action, params?.id).subscribe((res:any) => {
          if(res?.status == 200) {
            this.ngOnInit();
            this.notify.notificationService.success(res?.message);
          }
        })
      }
    });
  }

  async onStatusChange(e:any, params: any) {
    let action = "update-clubType";
    let param = {
      id: params?.id,
      status: e?.target?.value
    }

    await this.communityService.updateData(action, param).subscribe((res: any) => {
      if(res?.status == 200) {
        this.notify.notificationService.success(res?.message);
        this.ngOnInit();
      }
    }, error => {
        this.notify.notificationService.error(error);
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
    let action = "all-clubType";
    await this.communityService.getAllData(action).subscribe(
      (vid: any) => {
        console.log(vid.data)
        if(vid?.status == 200) this.dataSource.data = vid?.data;
      },
      (error) => {
        this.notify.notificationService.error(error);
      }
    );
  }
}
