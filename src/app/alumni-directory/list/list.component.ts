import { Component, OnInit, ViewChild } from '@angular/core';
import { TableUtil } from "./../../shared/tableUtil";
import { DataService } from 'src/app/services/data.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from 'src/app/models/person';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { Config } from 'src/app/services/config';
import { UsersService } from 'src/app/services/users.service';
import { environment } from 'src/environments/environment';
import { DeletedialogComponent } from 'src/app/shared/dialog/deletedialog/deletedialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  allUser: any;
  loading: boolean;
  pageType = "users";
  getAllUser: Array<any> = [];
  searchForm: FormGroup;
  imgPath: any;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public displayedColumns: string[] = ['mobile_number', 'email', 'institute_name', 'batch', 'city', 'current_designation'];
  public columnsToDisplay: string[] = ['sr.no' , 'profile_pic',...this.displayedColumns, 'status', 'actions'];

  /**
   * it holds a list of active filter for each column.
   * example : {firstName: {contains : 'person 1'}}
   **/
  public columnsFilters = {};

  public dataSource: MatTableDataSource<Person>;
  status: any;
  skill: any;
  getInstitutes: any;
  getBatch: any;
  primaryInd: any;
  secondaryInd: any;
  primaryFunc: any;
  secondaryFunc: any;
  formReset: boolean;
  display: number = 1;

  /**
   * Get all user data
   */
  async allAlumni() {
    this.loading = true;
    let action: string = "all-users";
    await this.dataService.getAllData(action).subscribe((res: any)=> {
      this.allUser = res?.data;
      this.loading = false;
    })

  }

  exportUser() {
    const userArr: Partial<any>[] = this.allUser.map(x => ({
      id: x.id,
      first_name: x.first_name,
      middle_name: x.middle_name,
      last_name: x.last_name,
      email: x.email,
      mobile_number: x.mobile_number,
      batch: x.batch,
      institute_name: x.institute_name,
      city: x.city,
      gender: x.gender,
      marital_status: x.marital_status,
      blood_group: x.blood_group,
      birth_date: x.birth_date,
      country: x.country,
      current_company: x.current_company,
      current_designation: x.current_designation,
      linkedin_id: x.linkedin_id,
      twitter_id: x.twitter_id,
      skype_id: x.skype_id,
      facebook_id: x.facebook_id,
      instagram_id: x.instagram_id,
    })
    );
    TableUtil.exportArrayToExcel(userArr, "AlumniList");
  }

  constructor(
    public dialog: MatDialog,
    private dataService: DataService,
    private router: Router,
    public notify : TokenInterceptor,
    private config: Config,
    private userService: UsersService,
    private fb: FormBuilder
  ) {
    this.status = this.config?.userStat;
    this.dataSource = new MatTableDataSource<Person>();
    this.imgPath = environment?.imgUrl;
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
  async onStatusChange(e: any, params: any) {
    let action = "update-user";

    let param = {
      id: params?.id,
      status: e?.target?.value
    }
 
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
    this.allAlumni();
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
   * Change view mode
   * @param mode 
   */
    changeView(mode: number): void {
      this.display = mode;
    }
}
