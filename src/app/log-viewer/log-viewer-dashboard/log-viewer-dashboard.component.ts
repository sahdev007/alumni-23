import { Component, OnInit } from '@angular/core';
import * as chartsData from '../../shared/data/chartjs';
@Component({
  selector: 'app-log-viewer-dashboard',
  templateUrl: './log-viewer-dashboard.component.html',
  styleUrls: ['./log-viewer-dashboard.component.scss']
})
export class LogViewerDashboardComponent implements OnInit {
  // Pie
  public pieChartLabels = chartsData.pieChartLabels;
  public pieChartData = chartsData.pieChartData;
  public pieChartType = chartsData.pieChartType;
  public pieChartColors = chartsData.pieChartColors;
  public pieChartOptions = chartsData.pieChartOptions;
  constructor() { }

  ngOnInit(): void {
  }


  // events
  public chartClicked(e: any): void {
    //your code here
  }

  public chartHovered(e: any): void {
    //your code here
  }

  
}
