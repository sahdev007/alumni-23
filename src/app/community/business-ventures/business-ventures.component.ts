import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/person';
import { CommunityService } from 'src/app/services/community.service';
import { DataService } from 'src/app/services/data.service';
import { ViewBusinessVenturesComponent } from 'src/app/shared/dialog/community/view-business-ventures/view-business-ventures.component';
import { DeletedialogComponent } from 'src/app/shared/dialog/deletedialog/deletedialog.component';

@Component({
  selector: 'app-business-ventures',
  templateUrl: './business-ventures.component.html',
  styleUrls: ['./business-ventures.component.scss']
})
export class BusinessVenturesComponent implements OnInit {

  public status = 'active';
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // public displayedColumns: string[] = ['autho', 'title', 'description', 'type', 'price', 'attendHost'];
  public displayedColumns: string[] = ['company', 'owner', 'contact', 'email'];
  public columnsToDisplay: string[] = [...this.displayedColumns, 'status', 'actions'];

  /**
   * it holds a list of active filter for each column.
   * example : {firstName: {contains : 'person 1'}}
   **/
  public columnsFilters = {};

  public dataSource: MatTableDataSource<Person>;
  // private serviceSubscribe: Subscription;

  constructor(
    private personsService: DataService, 
    public dialog: MatDialog,
    private dataService: DataService,
    public router: Router,
    private communityService : CommunityService
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

  view(data: any){
    const dialogRef = this.dialog.open(ViewBusinessVenturesComponent, {
      width: '400px',
      data: { data: data }
    });
  }

/**
 * Function to Update Business Ventures By Id
 * @param data 
 * @param params 
 */
  edit(data: Person, params: any) {
    this.router.navigate(['/community/edit-business-ventures'],{
      queryParams: { userId: data?.id }, skipLocationChange: true
    });
  }
/**
 * Function to Remove Busniess Ventures by ID
 * @param id 
 * @param params 
 */
  delete(data: any, params: string) {
    let action: string = 'delete-entrepreneur';
    const dialogRef = this.dialog.open(DeletedialogComponent, {
      width: '400px',
      data: { info: params, action: action }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.communityService.deleteData(action, data?.id).subscribe((res:any) => {
          if(res?.status == 200) {
            this.ngOnInit();
          }
        })
      }
    });
  }

  async onStatusChange(e:any, params: any) {
    let action = "update-entrepreneur";
      let param = {
        id: params?.id,
        status: e?.target?.value
      }
      console.log(param);
      await this.communityService.updateData(action, param).subscribe((res: any) => {
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
    let action = "all-entrepreneur";
    await this.dataService.getAllData(action).subscribe(
      (vid: any) => {
        console.log(vid.data)
        if(vid?.status == 200) this.dataSource.data = vid?.data;
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
