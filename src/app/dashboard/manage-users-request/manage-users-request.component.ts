import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { Person } from 'src/app/models/person';
import { DataService } from 'src/app/services/data.service';
import { UsersService } from 'src/app/services/users.service';
import { DeletedialogComponent } from 'src/app/shared/dialog/deletedialog/deletedialog.component';

@Component({
  selector: 'app-manage-users-request',
  templateUrl: './manage-users-request.component.html',
  styleUrls: ['./manage-users-request.component.scss']
})
export class ManageUsersRequestComponent implements OnInit {
  public status = 'active';
  pageType = "users";
  searchForm: FormGroup;
  getAllUser: Array<any> = [];
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public displayedColumns: string[] = ['first_name', 'mobile_number', 'email', 'institute_name', 'batch', 'city', 'current_designation'];
  public columnsToDisplay: string[] = [...this.displayedColumns, 'actions'];

  /**
   * it holds a list of active filter for each column.
   * example : {firstName: {contains : 'person 1'}}
   **/
  public columnsFilters = {};

  public dataSource: MatTableDataSource<Person>;
  skill: any;
  getInstitutes: any;
  getBatch: any;
  primaryInd: any;
  secondaryInd: any;
  primaryFunc: any;
  secondaryFunc: any;
  formReset: boolean;

  constructor(
    public dialog: MatDialog,
    private dataService: DataService,
    private notify: TokenInterceptor,
    public fb: FormBuilder,
    private userService: UsersService
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


  async approveUser(params: any) {
    params.status = "active";
    let action = {
      action: "updateStatus",
      id: params?.id
    };
    await this.dataService.postData(action, params).subscribe(
      (res: any) => {
        if (res) {
          this.notify.notificationService.success(
            res?.message
          );
          this.ngOnInit();
        }
      },
      (error) => {
        this.notify.notificationService.error(error);
      }
    );
  }

  reject(data: any, params: string ) {
    data.status = "rejected";
    let action = {
      action: "updateStatus",
      id: data?.id
    };
    const dialogRef = this.dialog.open(DeletedialogComponent, {
      width: '400px',
      data: { info: params }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataService.postData(action, data).subscribe((res: any) => {
          this.notify.notificationService.success(res?.message);
          this.ngOnInit();
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
    this.buildForm();
    this.getCommonApi();
    this.getAllData();
  }

  /**
 * Build search filter form
 */
  buildForm() {
    this.searchForm = this.fb.group({
      first_name: [""],
      fullName: [""],
      email: [""],
      mobile_number: [""],
      contact: [""],
      institute_name: [""],
      batch: [""],
      status: [""],
      current_company: [""],
      company:[''],
      owner: [""],
      reg_date_from: [""],
      reg_date_to: [""],
      type: ['']
    });
  }

  async getAllData() {
    let action = "manage-request";
    await this.dataService.getAllData(action).subscribe(
      (res: any) => {
        if(res?.status == 200) {
          this.getAllUser = res?.data;
          this.dataSource.data = this.getAllUser;
        }
      },
      (error) => {
        this.notify.notificationService.openFailureSnackBar(error);
      }
    );
  }

  /**
 * Function to get All common api
 */
  async getCommonApi() {
    let action = "all-common";
    await this.dataService.getData(action).subscribe(
      (res: any) => {
        this.skill = res?.Skill;
        this.getInstitutes = res?.Institute;
        this.getBatch = res?.Batch_Year;
        this.primaryInd = res?.Primary_Industry;
        this.secondaryInd = res?.Secondary_Industry;
        this.primaryFunc = res?.Primary_Function;
        this.secondaryFunc = res?.Secondary_Function;
      },
      (error) => {
        this.notify.notificationService.openFailureSnackBar(error);
      }
    );
  }

/**
 * Function to Filter Data
 */
  async searchData(){
    let isValue = Object.keys(this.searchForm.value).some(
      (value) => !!this.searchForm.value[value]
    );

    if (!isValue) {
      this.formReset = false;
      this.notify.notificationService.warning(
        "At least one field should be selected "
      );
    } else {
      this.formReset = true;
      this.getAllUser = [];
      this.searchForm.get("type").setValue(this.pageType);
      await this.userService
        .filterUsers(this.searchForm?.value)
        .subscribe((res: any) => {
          this.getAllUser = res?.data;
          this.dataSource.data = this.getAllUser;
        });
    }
  }

  /**
   * Function to Reset Search Form filter
   */
  resetForm() {
    this.getAllData();
    this.searchForm.reset(this.buildForm());
    this.formReset = false;
  }

}
