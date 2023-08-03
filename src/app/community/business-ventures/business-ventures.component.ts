import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { Person } from 'src/app/models/person';
import { CommunityService } from 'src/app/services/community.service';
import { Config } from 'src/app/services/config';
import { DataService } from 'src/app/services/data.service';
import { UsersService } from 'src/app/services/users.service';
import { DeletedialogComponent } from 'src/app/shared/dialog/deletedialog/deletedialog.component';

@Component({
  selector: 'app-business-ventures',
  templateUrl: './business-ventures.component.html',
  styleUrls: ['./business-ventures.component.scss']
})
export class BusinessVenturesComponent implements OnInit {
  searchForm : FormGroup;
  pageType = "entrepreneurship";

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public displayedColumns: string[] = ['company', 'owner', 'contact', 'email'];
  public columnsToDisplay: string[] = [...this.displayedColumns, 'status', 'actions'];

  /**
   * it holds a list of active filter for each column.
   * example : {firstName: {contains : 'person 1'}}
   **/
  public columnsFilters = {};

  public dataSource: MatTableDataSource<Person>;
  status : any;
  formReset: boolean;
  businessData: Array<any> = [];
  skill: any;
  getInstitutes: any;
  getBatch: any;
  primaryInd: any;
  secondaryFunc: any;
  primaryFunc: any;
  secondaryInd: any;

  constructor(
    public dialog: MatDialog,
    private dataService: DataService,
    public router: Router,
    private communityService : CommunityService,
    private config: Config,
    private notify: TokenInterceptor,
    private fb: FormBuilder,
    private userService: UsersService
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

  view(data: any){
    this.router.navigate(['/community/view-business-ventures'],{
      queryParams: { userId: data?.id }
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
            this.notify.notificationService.success(res?.message);
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
      await this.communityService.updateData(action, param).subscribe((res: any) => {
        if(res?.status == 200) {
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
    this.getAllData();
    this.getCommonApi();
  }

  buildForm() {
    this.searchForm = this.fb.group({
      name: [""],
      contact: [""],
      email: [""],
      company:[''],
      owner: [""],
      status: [""],
      type: ['']
    });
  }

  async getAllData() {
    let action = "all-entrepreneur";
    this.businessData = [];
    await this.dataService.getAllData(action).subscribe(
      (entre: any) => {
        if(entre?.status == 200){
            this.businessData = entre?.data;
            this.dataSource.data = this.businessData;
        }
      },
      (error) => {
        this.notify.notificationService.error(error);
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
   * Function to filter entrepreneurship table records
   */
    async searchData() {
      let isValue = Object.keys(this.searchForm.value).some(
        (value) => !!this.searchForm.value[value]
      );
      if (!isValue) {
        this.formReset = false;
        this.notify.notificationService.warning(
          "At least one field should be selected"
        );
      } else {
        this.businessData = [];
        this.formReset = true;
        this.searchForm.get("type").setValue(this.pageType);
        await this.userService
          .filterEntrepreneur(this.searchForm?.value)
          .subscribe((res: any) => {
              this.businessData = res?.data;
              this.dataSource.data = this.businessData;
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
