import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { Person } from 'src/app/models/person';
import { CelebrateService } from 'src/app/services/celebrate.service';
import { ViewFeaturedAlumniComponent } from 'src/app/shared/dialog/celebrate/view-featured-alumni/view-featured-alumni.component';
import { DeletedialogComponent } from 'src/app/shared/dialog/deletedialog/deletedialog.component';

@Component({
  selector: 'app-featured-alumni',
  templateUrl: './featured-alumni.component.html',
  styleUrls: ['./featured-alumni.component.scss']
})
export class FeaturedAlumniComponent implements OnInit {
  public status = '';
  stat = [{id:1, value:'active'}, {id:2, value:'inActive'}]
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public displayedColumns: string[] = ['full_name', 'email', 'batch'];
  public columnsToDisplay: string[] = [...this.displayedColumns, 'status', 'actions'];

  /**
   * it holds a list of active filter for each column.
   * example : {firstName: {contains : 'person 1'}}
   **/
  public columnsFilters = {};

  public dataSource: MatTableDataSource<Person>;

  constructor(
    public dialog: MatDialog,
    private celebrateService: CelebrateService,
    public router: Router,
    private notifyService: TokenInterceptor
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
/**
 * Function to Add Featured Alumni
 * @param data 
 * @param params 
 */
  add(data: any, params: any) {
    this.router.navigate(['/celebrate/create-featured-alumni']);
  }
  view(data:any){
    const dialogRef = this.dialog.open(ViewFeaturedAlumniComponent, {
      width: '380px',
      data: { data: data }
    });
  }
/**
 * Function to Edit Featured Alumni By Id
 * @param data 
 * @param params 
 */
  edit(data: any, params: string) {
    this.router.navigate(['/celebrate/create-featured-alumni'], {queryParams: {alumniId: data?.id, action: params}, skipLocationChange: true});
  }

/**
 * Function to Delete Featrued alumni By Id
 * @param data 
 * @param params 
 */
  delete(data: any, params: string) {
    let action: string = "delete-getFeatured";
    const dialogRef = this.dialog.open(DeletedialogComponent, {
      width: '400px',
      data: { data: data, info: params }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.celebrateService.deleteData(action, data?.id).subscribe((res: any) => {
          if(res?.status == 200) {
            this.ngOnInit();
            this.notifyService.notificationService.success(res?.message);
          } 
        })
      }
    });
  }

  async onStatusChange(e:any, params: any) {
    let action = "update-getFeatured";
      let param = {
        id: params?.id,
        status: e?.target?.value
      }

      await this.celebrateService.updateData(action, param).subscribe((res: any) => {
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
    let action = "all-getFeatured";
    await this.celebrateService.getAllData(action).subscribe(
      (res: any) => {
        console.log(res.data)
        if(res?.status == 200) this.dataSource.data = res?.data;
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
