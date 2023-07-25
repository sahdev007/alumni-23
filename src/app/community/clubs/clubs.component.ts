import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from 'src/app/models/person';
import { DataService } from 'src/app/services/data.service';
import { DeletedialogComponent } from 'src/app/shared/dialog/deletedialog/deletedialog.component';
import { Router } from '@angular/router';
import { CommunityService } from 'src/app/services/community.service';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { ViewClubComponent } from 'src/app/shared/dialog/community/view-club/view-club.component';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.scss']
})
export class ClubsComponent implements OnInit {

  public status = 'active';
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public displayedColumns: string[] = ['name', 'type'];
  public columnsToDisplay: string[] = [...this.displayedColumns, 'status', 'actions'];

  /**
   * it holds a list of active filter for each column.
   * example : {firstName: {contains : 'person 1'}}
   **/
  public columnsFilters = {};

  public dataSource: MatTableDataSource<Person>;

  constructor(
    public dialog: MatDialog,
    private dataService: DataService,
    public router: Router,
    private communityService : CommunityService,
    private notify: TokenInterceptor
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
    this.router.navigate(['/community/add-clubs']);
  }

  view(data:any){
    const dialogRef = this.dialog.open(ViewClubComponent, {
      width: '380px',
      data: { data: data }
    });
  }
  
  edit(id: number, params: string) {
    this.router.navigate(['/community/add-clubs'], {queryParams: { clubId: id, action: 'update-club' }, skipLocationChange: true});
  }

  delete(data: any, params: string) {
    let action: string = "delete-club";
    const dialogRef = this.dialog.open(DeletedialogComponent, {
      width: '380px',
      data: { info: params }
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      if (result) {
        await this.communityService.deleteData(action, data?.id).subscribe((item:any) => {
          if(item?.status == 200) {
            this.notify.notificationService.success(item?.message);
            this.ngOnInit();
          }
        });
      }
    });
  }

  async onStatusChange(e:any, params: any) {
    let action = "update-club";
      let param = {
        id: params?.id,
        status: e?.target?.value
      }
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
    let action = "all-clubsGet";
    await this.dataService.getAllData(action).subscribe(
      (vid: any) => {
        if(vid?.status == 200) this.dataSource.data = vid?.data;
      },
      (error) => {
        this.notify.notificationService.error(error);
      }
    );
  }

}
