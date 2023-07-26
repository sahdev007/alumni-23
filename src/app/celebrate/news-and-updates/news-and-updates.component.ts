import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { Person } from 'src/app/models/person';
import { CelebrateService } from 'src/app/services/celebrate.service';
import { Config } from 'src/app/services/config';
import { DataService } from 'src/app/services/data.service';
import { ViewNewsUpdatesComponent } from 'src/app/shared/dialog/celebrate/view-news-updates/view-news-updates.component';
import { DeletedialogComponent } from 'src/app/shared/dialog/deletedialog/deletedialog.component';

@Component({
  selector: 'app-news-and-updates',
  templateUrl: './news-and-updates.component.html',
  styleUrls: ['./news-and-updates.component.scss']
})
export class NewsAndUpdatesComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public displayedColumns: string[] = ['author', 'title'];
  public columnsToDisplay: string[] = [...this.displayedColumns,'description', 'status', 'actions'];

  /**
   * it holds a list of active filter for each column.
   * example : {firstName: {contains : 'person 1'}}
   **/
  public columnsFilters = {};

  public dataSource: MatTableDataSource<Person>;
  status: any;

  constructor( 
    public dialog: MatDialog,
    private dataService: DataService,
    public router: Router,
    private celebrateService : CelebrateService,
    private notifyService: TokenInterceptor,
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
 * Function to navigate on Add News page
 * @param data 
 * @param action 
 */
  add(data: any, action?: string) {
    this.router.navigate(['/celebrate/add-news']);
  }
/**
 * Function to navigate on Edit News Page
 * @param data 
 * @param params 
 */
  edit(data: any, params: string) {
    this.router.navigate(['/celebrate/add-news'], {queryParams: { newsId: data?.id, action: params }, skipLocationChange: true});
  }

  /**
   * Function to View New&Updates
   * @param data 
   */
  view(data: any) {
    const dialogRef = this.dialog.open(ViewNewsUpdatesComponent, {
      width:'600px',
      data: {data: data}
    })
  }
/**
 * Function to Remove news by Id
 * @param data 
 * @param params 
 */
  delete(data: any, params: string) {
    let action: string = "delete-news";
    const dialogRef = this.dialog.open(DeletedialogComponent, {
      width: '400px',
      data: { data: data, info: params }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.celebrateService.deleteData(action, data?.id).subscribe((res: any) => {
          if(res?.status == 200) {
            this.notifyService.notificationService.success(res?.message);
            this.ngOnInit();
          } 
        })
      }
    });
  }
/**
 * Function to Change news's status
 * @param e 
 * @param params 
 */
async onStatusChange(e:any, params: any) {
  let action = "update-news";
    let param = {
      id: params?.id,
      status: e?.target?.value
    }

    await this.celebrateService.updateData(action, param).subscribe((res: any) => {
      if(res?.status == 200) {
        this.notifyService.notificationService.success(res?.message);
        this.ngOnInit();
      }
    }, error => {
        this.notifyService.notificationService.error(error);
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
/**
 * Function to Get all news
 */
  async getAllData() {
    let action = "all-news";
    await this.dataService.getAllData(action).subscribe(
      (res: any) => {
        console.log(res.data)
        if(res?.status == 200) this.dataSource.data = res?.data;
      },
      (error) => {
        this.notifyService.notificationService.error(error);
      }
    );
  }
}
