import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from "./shared/shared.module";
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { FullLayoutComponent } from "./layouts/full/full-layout.component";

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false
};

import * as $ from 'jquery';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { CommonService } from './services/common.service';
import { CountryService } from './services/country.service';
import { DataService } from './services/data.service';
import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { TokenInterceptor } from './core/token.interceptor';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarService } from './shared/sidebar/sidebar.service';
import { 
	IgxDragDirective,
	IgxDropDirective,
	IgxDragDropModule,
	IgxDialogModule,
  IgxListModule,
  IgxIconModule
 } from "igniteui-angular";
import { ApplicationModule } from './application/application.module';
@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    ContentLayoutComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AuthModule,
    MatSnackBarModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    SharedModule,
    AuthModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDKXKdHQdtqgPVl2HI2RnUa_1bjCxRCQo4'}),
    PerfectScrollbarModule
  ],
  providers: [
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
  
    AuthService,
    CommonService,
    CountryService,
    DataService,
    UsersService,
    SidebarService,
    TokenInterceptor,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
