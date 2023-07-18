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
import { DeletedialogComponent } from 'src/app/shared/dialog/deletedialog/deletedialog.component';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.scss']
})
export class MentorComponent implements OnInit {
  public status = 'active';
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // public displayedColumns: string[] = ['autho', 'title', 'description', 'type', 'price', 'attendHost'];
  public displayedColumns: string[] = ['user_id', 'first_name', 'email', 'mobile_number', 'mentee_count'];
  public columnsToDisplay: string[] = [...this.displayedColumns,'addMentee', 'actions'];

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
  add() {
    const dialogRef = this.dialog.open(AddMenteeComponent, {
      width: '650px',
      data: {}
    });
  }

  /**
   * Function to edit project
   * @param data 
   * @param params 
   */
  edit(data: Person, params: any) {
    console.log(params)
    const dialogRef = this.dialog.open(EditMenteeComponent, {
      width: '650px',
      data: {data: params}
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     this.personsService.edit(result);
    //   }
    // });
  }
  /**
   * Function to remove items by id
   * @param id 
   * @param params 
  */
  delete(id: any, params: string) {
    const dialogRef = this.dialog.open(DeletedialogComponent, {
      width: '400px',
      data: { info: params }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.personsService.remove(id);
      }
    });
  }
  /**
   * Function to View user list
   * @param data 
   */
  // viewUserList(data: any) {
  //   const dialogRef = this.dialog.open(ViewUserListComponent, {
  //     width: '400px',
  //     data: { info: data }
  //   });
  // }

  async onStatusChange(e:any, params: any) {
    console.log(e, params);
    let action = "update-gallery";
      let param = {
        id: params?.id,
        is_active: e?.value
      }
      console.log(param);
      await this.dataService.updateData(action, param).subscribe((res: any) => {
        if(res?.status == 200) {
          // this.notify.notificationService.openSuccessSnackBar(res?.message);
        }
      }, error => {
        // this.notify.notificationService.openFailureSnackBar(error)
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
    // this.personsService.getAll();
    // this.serviceSubscribe = this.personsService.persons$.subscribe(res => {
    //   this.dataSource.data = res;
    //   console.log(res);
    // })
  }

  /**
   * Function to Get All project data
   */
  async getAllData() {
    let action = "willProvide-mentorship";
    await this.dataService.getAllData(action).subscribe(
      (res: any) => {
        // console.log(res.data)
        if(res?.status == 200) {
          this.dataSource.data = res?.data;
        }
      
        // if (user?.status == 200) {
        //   this.rowData = user?.data;
        //   this.rowData.sort((a: any, b: any) => {
        //     return a?.order_by - b?.order_by;
        //   });
        // }
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
