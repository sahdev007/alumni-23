import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { Person } from 'src/app/models/person';
import { Config } from 'src/app/services/config';
import { OrganizationService } from 'src/app/services/organization.service';
import { DeletedialogComponent } from 'src/app/shared/dialog/deletedialog/deletedialog.component';
import { AddEditCoursesComponent } from 'src/app/shared/dialog/organization/add-edit-courses/add-edit-courses.component';

@Component({
  selector: 'app-post-graduate',
  templateUrl: './post-graduate.component.html',
  styleUrls: ['./post-graduate.component.scss']
})
export class PostGraduateComponent implements OnInit {
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public displayedColumns: string[] = ['course'];
  public columnsToDisplay: string[] = [...this.displayedColumns, 'status', 'actions'];

  public columnsFilters = {};

  public dataSource: MatTableDataSource<Person>;
  status: any;

  constructor(
    private organizationService: OrganizationService, 
    public dialog: MatDialog,
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

  add(params: any, action?: string, type?: string) {
    const dialogRef = this.dialog.open(AddEditCoursesComponent, {
      width: '400px',
      data: { data: params, action: action, type: type }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ngOnInit();
      }
    });
  }


  edit(data: any, params: any, type?:string) {
    const dialogRef = this.dialog.open(AddEditCoursesComponent, {
      width: '400px',
      data: {data: data, action: params, type: type}
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
            this.notify.notificationService.success(res?.message);
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
    let action = "all-course";
    await this.organizationService.getAllData(action).subscribe(
      (course: any) => {
        if(course?.status == 200) {
          this.dataSource.data = course?.Courses.filter((x: any) => {
            return x.type == "PG";
          });
        }
      },
      (error) => {
          this.notify.notificationService.error(error);
      }
    );
  }

  async onStatusChange(e:any, params: any) {
    let action = "update-course";
      let param = {
        id: params?.id,
        status: e?.target?.value
      }

      await this.organizationService.updateData(action, param).subscribe((res: any) => {
        if(res?.status == 200) {
          this.notify.notificationService.success(res?.message);
          this.ngOnInit();
        }
      }, error => {
          this.notify.notificationService.error(error);
      });
  }
}
