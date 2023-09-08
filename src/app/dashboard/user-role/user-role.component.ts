import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { AuthService } from 'src/app/services/auth.service';
import { Config } from 'src/app/services/config';
import { DataService } from 'src/app/services/data.service';
import { UsersService } from 'src/app/services/users.service';
import { DeletedialogComponent } from 'src/app/shared/dialog/deletedialog/deletedialog.component';
import { SendMailComponent } from 'src/app/shared/dialog/send-mail/send-mail.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.scss']
})
export class UserRoleComponent implements OnInit {
  pageType = "users";
  getAllUser: Array<any> = [];
  searchForm: FormGroup;
  imgPath: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public displayedColumns: string[] = ['mobile_number', 'email', 'city'];
  public columnsToDisplay: string[] = ['sr.no', 'profile_pic',...this.displayedColumns, 'created_at','role', 'actions'];

  /**
   * it holds a list of active filter for each column.
   * example : {firstName: {contains : 'person 1'}}
   **/
  public columnsFilters = {};

  public dataSource: MatTableDataSource<any>;
  status: any;
  skill: any;
  getInstitutes: any;
  getBatch: any;
  primaryInd: any;
  secondaryInd: any;
  primaryFunc: any;
  secondaryFunc: any;
  formReset: boolean;
  imgUrl: any;
  getRole: any;
  userRole:any;

  constructor(
    public dialog: MatDialog,
    private dataService: DataService,
    private router: Router,
    public notify : TokenInterceptor,
    private config: Config,
    private userService: UsersService,
    private fb: FormBuilder,
    public arouter: ActivatedRoute,
    private authService: AuthService
  ) {
    this.status = this.config?.userStat;
    this.dataSource = new MatTableDataSource<any>();
    this.imgPath = environment?.imgUrl;
    this.getRole = this.authService.getUserRole();
    this.userRole = this.config.role;
  }

/**
 * Function to View user by Id
 * @param id 
 */
  view(id: any) {
    this.router.navigate(['user-profile'], { queryParams: { id: id } });
  }
/**
 * Function to navigate user profile by id
 * @param data 
 */
  edit(data: any) {
    this.router.navigate(['user-profile'], { queryParams: { id: data?.id, type: 'edit' } });
  }
/**
 * Function to delete user by Id
 * @param data 
 * @param params 
 */
  delete(data: any, params: string) {
    let action:string = "delete-user";
    const dialogRef = this.dialog.open(DeletedialogComponent, {
      width: '400px',
      data: { info: params }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataService.deleteData(action, data?.id).subscribe((res: any) => {
          if(res?.status == 200) this.notify.notificationService.success(res?.message); this.ngOnInit();
        })
      }
    });
  }
/**
 * Function to Change User Status by Id
 * @param e 
 * @param params 
 */
  async onRoleChange(e: any, params: any) {
    let action = "update-role";

    let param = {
      id: params?.id,
      role: JSON.parse(e?.target?.value)
    }
    console.log(param, 'Change role')
 
    await this.dataService.updateData(action, param).subscribe((res: any) => {
      if (res?.status == 200) {
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
    this.buildForm();
    this.getCommonApi();
    this.getAllData();
    if (this.getRole == 2) {
      this.columnsToDisplay = ['sr.no', 'profile_pic',...this.displayedColumns, 'created_at', 'role'];
    }
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
/**
 * Function to get All user data
 */
  async getAllData() {
    let action = "all-users";
    this.getAllUser = [];
    await this.dataService.getAllData(action).subscribe(
      (res: any) => {
        if (res?.status == 200) {
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

  /**
   * Functiont to reset password
   * @param params 
   */
  async onResetPwd(params: any) {
    this.router.navigate(['/auth/reset-password'], { queryParams: { id: params?.id, type: 'user' } });
  }

  /**
   * Function to 
   * @param params 
   */
  onSendMail(params: any) {
    const dialogRef = this.dialog.open(SendMailComponent, {
      width: '400px',
      data: { user: params }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // this.dataService.deleteData(action, data?.id).subscribe((res: any) => {
        //   if(res?.status == 200) this.notify.notificationService.success(res?.message); this.ngOnInit();
        // })
      }
    });
  }


  private filter() {
    this.dataSource.filterPredicate = (data: any, filter: string) => {
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
}
