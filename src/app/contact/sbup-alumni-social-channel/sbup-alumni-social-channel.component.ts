import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { TokenInterceptor } from "src/app/core/token.interceptor";
import { Person } from "src/app/models/person";
import { Config } from "src/app/services/config";
import { ContactService } from "src/app/services/contact.service";
import { AddEditSocialContactComponent } from "src/app/shared/dialog/contact/add-edit-social-contact/add-edit-social-contact.component";
import { ViewContactComponent } from "src/app/shared/dialog/contact/view-contact/view-contact.component";
import { DeletedialogComponent } from "src/app/shared/dialog/deletedialog/deletedialog.component";

@Component({
  selector: "app-sbup-alumni-social-channel",
  templateUrl: "./sbup-alumni-social-channel.component.html",
  styleUrls: ["./sbup-alumni-social-channel.component.scss"],
})
export class SbupAlumniSocialChannelComponent implements OnInit {
  getAllSocialContact: Array<any> = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public displayedColumns: string[] = ["title", "link"];
  public columnsToDisplay: string[] = [
    ...this.displayedColumns,
    "status",
    "actions",
  ];

  /**
   * it holds a list of active filter for each column.
   * example : {firstName: {contains : 'person 1'}}
   **/
  public columnsFilters = {};

  public dataSource: MatTableDataSource<Person>;
  status :any;

  constructor(
    private contactService: ContactService,
    public dialog: MatDialog,
    public router: Router,
    private notify: TokenInterceptor,
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
    this.dataSource.filter = "activate";

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
  add(params: string) {
    const dialogRef = this.dialog.open(AddEditSocialContactComponent, {
      width: "450px",
      data: { action: params },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.ngOnInit();
      }
    });
  }
  /**
   * Function to View Contact
   */
  view(params: any) {
    const dialogRef = this.dialog.open(ViewContactComponent, {
      width: "450px",
      data: { data: params, type: "socialContact" },
    });
  }

  /**
   * Function to edit project
   * @param data
   * @param params
   */
  edit(data: any, params: any) {
    const dialogRef = this.dialog.open(AddEditSocialContactComponent, {
      width: "450px",
      data: { data: data, action: params },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        setTimeout(() => {
          this.ngOnInit();
        }, 500);
      }
    });
  }
  /**
   * Function to remove items by id
   * @param id
   * @param params
   */
  delete(data: any, params: string) {
    let action: string = "delete-contact";
    const dialogRef = this.dialog.open(DeletedialogComponent, {
      width: "400px",
      data: { info: params },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.contactService
          .deleteData(action, data?.id)
          .subscribe((res: any) => {
            if(res?.status == 200) this.notify.notificationService.success(res?.message); this.ngOnInit();
          });
      }
    });
  }

  async onStatusChange(e: any, params: any) {
    let action = "update-contact";
    let param = {
      id: params?.id,
      status: e?.target?.value,
    };

    await this.contactService.updateData(action, param).subscribe(
      (res: any) => {
        if (res?.status == 200) {
          this.notify.notificationService.success(res?.message);
          this.ngOnInit();
        }
      },
      (error) => {
        this.notify.notificationService.error(error);
      }
    );
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
    let action = "all-contact";
    this.getAllSocialContact = [];
    await this.contactService.getAllData(action).subscribe(
      (res: any) => {
        if (res?.status == 200) {
          res?.data?.filter((x: any) => {
            if (x?.type == "SbupChannel") {
              this.getAllSocialContact.push(x);
            }
          });
          this.dataSource.data = this.getAllSocialContact;
        }
      },
      (error) => {
        this.notify.notificationService.error(error);
      }
    );
  }
}
