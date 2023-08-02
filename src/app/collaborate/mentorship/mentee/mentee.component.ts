import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { Person } from 'src/app/models/person';
import { DataService } from 'src/app/services/data.service';
import { UsersService } from 'src/app/services/users.service';
import { DeletedialogComponent } from 'src/app/shared/dialog/deletedialog/deletedialog.component';

@Component({
  selector: 'app-mentee',
  templateUrl: './mentee.component.html',
  styleUrls: ['./mentee.component.scss']
})
export class MenteeComponent implements OnInit {
  public status = 'active';
  pageType: string = "mentee";
  searchForm: FormGroup;
  formReset: boolean;
  getMentee: Array<any> = [];
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public displayedColumns: string[] = ['user_id', 'first_name', 'email', 'mobile_number', 'mentor_count'];
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

  constructor(
    public dialog: MatDialog,
    private dataService: DataService,
    public router: Router,
    private notify: TokenInterceptor,
    private userService: UsersService,
    public fb: FormBuilder
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
    this.router.navigate(['/collaborate/add-job']);
  }

  /**
   * Function to edit project
   * @param data 
   * @param params 
   */
  edit(data: Person, params: any) {
    console.log(params);
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
      }
    });
  }

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
    this.buildForm();
    this.getCommonApi();
    this.getAllData();
  }

  /**
   * Function to Get All project data
   */
  async getAllData() {
    let action = "willProvide-mentee";
    this.getMentee = [];
    await this.dataService.getAllData(action).subscribe(
      (res: any) => {
        if(res?.status == 200) {
          this.getMentee = res?.data;
          this.dataSource.data = this.getMentee;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  buildForm() {
    this.searchForm = this.fb.group({
      first_name: [""],
      email: [""],
      mobile_number: [""],
      institute_id: [""],
      batchYear_id: [""],
      primary_industry_focus: [""],
      secondary_industry_focus: [""],
      primary_function_area: [""],
      secondary_function_area: [""],
      skill: [""],
      type: ['']
    })
  }

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
      this.getMentee = [];
      this.searchForm.get("type").setValue(this.pageType);
      await this.userService
        .filterMentee(this.searchForm?.value)
        .subscribe((res: any) => {
          this.getMentee = res?.data;
          this.dataSource.data = this.getMentee;
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
