import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-color-switcher',
  templateUrl: './color-switcher.component.html',
  styleUrls: ['./color-switcher.component.scss']
})
export class ColorSwitcherComponent implements OnInit {
  sidebarColor: any;
  headerColor: any;
  allColor: any;
  themeColor: any;
  token: any;
  defaultTheme: any;
  themeStandard: any;
  mainColor: any;
  htmlId: any;
  sidbarData = [
    {id:1, value:"sidebarcolor1"},
    {id:2, value:"sidebarcolor2"},
    {id:3, value:"sidebarcolor3"},
    {id:4, value:"sidebarcolor4"},
    {id:5, value:"sidebarcolor5"},
    {id:6, value:"sidebarcolor6"},
    {id:7, value:"sidebarcolor7"},
    {id:8, value:"sidebarcolor8"}
  ];
  themeData = [
    {id:1, name:"Light", value: "light-theme"},
    {id:2, name:"Dark", value: "dark-theme"},
    {id:3, name:"Semi Dark", value: "semi-theme"}
  ];
  headerData = [
    {id:1, value:"headercolor1"},
    {id:2, value:"headercolor2"},
    {id:3, value:"headercolor3"},
    {id:4, value:"headercolor4"},
    {id:5, value:"headercolor5"},
    {id:6, value:"headercolor6"},
    {id:7, value:"headercolor7"},
    {id:8, value:"headercolor8"}
  ]
  constructor(private dataService: DataService) {
    if (localStorage.hasOwnProperty("token")) {
      this.token =
        JSON?.parse(localStorage?.getItem("token") || "");
    }

    this.htmlId = document.getElementById('htmlId');
    console.log(this.htmlId);
   }

  async ngOnInit() {
    let action: string = "update-setting";
    let params = {
      action: action
    };

    this.dataService.postData(params).subscribe((x:any) => {
      console.log(x);
      this.sidebarColor = x?.data[0].sidebarColor;
      this.headerColor = x?.data[0].headerColor;
      this.themeColor = x?.data[0].themeColor;
      this.mainColor = `${this.themeColor} ${this.sidebarColor} ${this.headerColor}`;
      console.log(this.mainColor, '----------->>>>>>>>>', this.themeColor);
      if(this.themeColor != undefined) {
        this.htmlId.classList.add(this.themeColor);
      } else {
        this.htmlId.classList.add(this.headerColor, this.sidebarColor);
      }
    });

  

    $(document).ready( function () {
      // this.sidebarColor = localStorage.getItem('sidebar');
      // this.headerColor = localStorage.getItem('themeHeaderColor');      

      // this.themeColor = localStorage.getItem('themeColor');

      // if(this.themeColor != undefined) {
      //   $( "html" ).addClass(this.themeColor);
      // } else {
      //   if (this.sidebarColor != undefined || this.headerColor != undefined) {
      //     this.defaultColor = this.sidebarColor.concat(" ", this.headerColor);
      //     $( "html" ).addClass(this.defaultColor);
      //   }
      // }
    });

    $(".switcher-btn").on("click", function() {
      $(".switcher-wrapper").toggleClass("switcher-toggled")
    }), 
    $(".close-switcher").on("click", function() {
      $(".switcher-wrapper").removeClass("switcher-toggled")
    })
  }

  /**
   * On Sidebar color updates
   * @param value 
   */
  onChange(value:any, standard: string) {
    let action: string = "update-setting";
    let params = {
      action: action
    };
    if(standard == 'sidebar') {
      this.themeStandard = {
        sidebarColor: value?.value
      };
    } else if (standard == 'theme') {
      this.themeStandard = {
        themeColor: value?.value
      };
    } else if(standard == 'header') {
      this.themeStandard = {
        headerColor: value?.value,
        themeColor: ''
      };
    }
    this.dataService.postData(params, this.themeStandard).subscribe((x:any) => {
      console.log(x);
    });
  }

}
