import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogViewerRoutingModule } from './log-viewer-routing.module';
import { LogViewerDashboardComponent } from './log-viewer-dashboard/log-viewer-dashboard.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogsByDateComponent } from './logs-by-date/logs-by-date.component';
import { ChartsModule } from 'ng2-charts';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [LogViewerDashboardComponent, LogsByDateComponent],
  imports: [
    CommonModule,
    LogViewerRoutingModule,
    EditorModule,
    NgbModule,
    ChartsModule,
    HighchartsChartModule
  ]
})
export class LogViewerModule { }
