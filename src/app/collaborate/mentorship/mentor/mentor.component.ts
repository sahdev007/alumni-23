import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/person';
import { DataService } from 'src/app/services/data.service';
import { AddMenteeComponent } from 'src/app/shared/dialog/collaborate/add-mentee/add-mentee.component';
import { EditMenteeComponent } from 'src/app/shared/dialog/collaborate/edit-mentee/edit-mentee.component';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.scss']
})
export class MentorComponent implements OnInit {
  public status = 'active';
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public displayedColumns: string[] = ['user_id', 'first_name', 'email', 'mobile_number', 'mentee_count'];
  public columnsToDisplay: string[] = [...this.displayedColumns,'addMentee', 'actions'];

  /**
   * it holds a list of active filter for each column.
   * example : {firstName: {contains : 'person 1'}}
   **/
  public columnsFilters = {};

  public dataSource: MatTableDataSource<Person>;

  constructor( 
    public dialog: MatDialog,
    private dataService: DataService,
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

  /**
   * Function to add project List
   */
  add(params: any, action: string) {
    const dialogRef = this.dialog.open(AddMenteeComponent, {
      width: '750px',
      data: {data: params, action: action}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ngOnInit();
      }
    });
  }
  /**
   * View Mentor Info
   */
  view(e: any) {
    this.router.navigate(["/view-profile"], { queryParams: { id: e?.user_id } });
  }

  /**
   * Function to edit project
   * @param data 
   * @param params 
   */
  edit(data: any, params: any) {
    const dialogRef = this.dialog.open(EditMenteeComponent, {
      width: '650px',
      data: {data: data, action: params}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ngOnInit();
      }
    });
  }

  async onStatusChange(e:any, params: any) {
    let action = "update-gallery";
      let param = {
        id: params?.id,
        status: e?.value
      }
      console.log(param);
      await this.dataService.updateData(action, param).subscribe((res: any) => {
        if(res?.status == 200) {
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

  /**
   * Function to Get All project data
   */
  async getAllData() {
    let action = "willProvide-mentorship";
    await this.dataService.getAllData(action).subscribe(
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
}
