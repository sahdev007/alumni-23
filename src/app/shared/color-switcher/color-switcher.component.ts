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
  constructor(private dataService: DataService) {
    if (localStorage.hasOwnProperty("token")) {
      this.token =
        JSON?.parse(localStorage?.getItem("token") || "");
    }
   }

  async ngOnInit() {
    let action: string = "update-setting";
    let params = {
      action: action
    }
    this.dataService.postData(params).subscribe((x:any) => {
      console.log(x);
    })

    $(document).ready( function () {
      this.sidebarColor = localStorage.getItem('sidebar');
      this.headerColor = localStorage.getItem('themeHeaderColor');      

      this.themeColor = localStorage.getItem('themeColor');
      console.log(this.themeColor);

      if(this.themeColor != undefined) {
        $( "html" ).addClass(this.themeColor);
      } else {
        if (this.sidebarColor != undefined || this.headerColor != undefined) {
          this.defaultColor = this.sidebarColor.concat(" ", this.headerColor);
          $( "html" ).addClass(this.defaultColor);
        }
      }
    });

    $(".switcher-btn").on("click", function() {
      $(".switcher-wrapper").toggleClass("switcher-toggled")
    }), 
    $(".close-switcher").on("click", function() {
      $(".switcher-wrapper").removeClass("switcher-toggled")
    }), 

    //Theme Color
    $("#lightmode").on("click", function() {
      $("html").attr("class", "light-theme"),
      localStorage.setItem('themeColor', 'light-theme');
      localStorage.removeItem('themeHeaderColor');
      localStorage.removeItem('sidebar');
    }), 
    $("#darkmode").on("click", function() {
      $("html").attr("class", "dark-theme"),
      localStorage.setItem('themeColor', 'dark-theme');
      localStorage.removeItem('themeHeaderColor');
      localStorage.removeItem('sidebar');
    }), 
    $("#semidark").on("click", function() {
      $("html").attr("class", "semi-dark"),
      localStorage.setItem('themeColor', 'semi-theme');
      localStorage.removeItem('themeHeaderColor');
      localStorage.removeItem('sidebar');
    }), 
    $("#minimaltheme").on("click", function() {
      $("html").attr("class", "minimal-theme"),
      localStorage.setItem('themeColor', 'minimal-theme');
      localStorage.removeItem('themeHeaderColor');
      localStorage.removeItem('sidebar');
    }), 

    // Header color
    $("#headercolor1").on("click", function() {
      $("html").addClass("color-header headercolor1"), 
      $("html").removeClass("headercolor2 headercolor3 headercolor4 headercolor5 headercolor6 headercolor7 headercolor8"),
      localStorage.setItem('themeHeaderColor', 'color-header headercolor1');
      localStorage.removeItem('themeColor');
    }), 
    $("#headercolor2").on("click", function() {
      $("html").addClass("color-header headercolor2"), 
      $("html").removeClass("headercolor1 headercolor3 headercolor4 headercolor5 headercolor6 headercolor7 headercolor8"),
      localStorage.setItem('themeHeaderColor', 'color-header headercolor2');
      localStorage.removeItem('themeColor');
    }), 
    $("#headercolor3").on("click", function() {
      $("html").addClass("color-header headercolor3"), 
      $("html").removeClass("headercolor1 headercolor2 headercolor4 headercolor5 headercolor6 headercolor7 headercolor8"),
      localStorage.setItem('themeHeaderColor', 'color-header headercolor3');
      localStorage.removeItem('themeColor');
    }), 
    $("#headercolor4").on("click", function() {
      $("html").addClass("color-header headercolor4"), 
      $("html").removeClass("headercolor1 headercolor2 headercolor3 headercolor5 headercolor6 headercolor7 headercolor8"),
      localStorage.setItem('themeHeaderColor', 'color-header headercolor4');
      localStorage.removeItem('themeColor');
    }), 
    $("#headercolor5").on("click", function() {
      $("html").addClass("color-header headercolor5"), 
      $("html").removeClass("headercolor1 headercolor2 headercolor4 headercolor3 headercolor6 headercolor7 headercolor8"),
      localStorage.setItem('themeHeaderColor', 'color-header headercolor5');
      localStorage.removeItem('themeColor');
    }), 
    $("#headercolor6").on("click", function() {
      $("html").addClass("color-header headercolor6"), 
      $("html").removeClass("headercolor1 headercolor2 headercolor4 headercolor5 headercolor3 headercolor7 headercolor8"),
      localStorage.setItem('themeHeaderColor', 'color-header headercolor6');
      localStorage.removeItem('themeColor');
    }), 
    $("#headercolor7").on("click", function() {
      $("html").addClass("color-header headercolor7"), 
      $("html").removeClass("headercolor1 headercolor2 headercolor4 headercolor5 headercolor6 headercolor3 headercolor8"),
      localStorage.setItem('themeHeaderColor', 'color-header headercolor7');
      localStorage.removeItem('themeColor');
    }), 
    $("#headercolor8").on("click", function() {
      $("html").addClass("color-header headercolor8"), 
      $("html").removeClass("headercolor1 headercolor2 headercolor4 headercolor5 headercolor6 headercolor7 headercolor3"),
      localStorage.setItem('themeHeaderColor', 'color-header headercolor8');
      localStorage.removeItem('themeColor');
    })
    
    // sidebar colors 


    $('#sidebarcolor1').click(theme1);
    $('#sidebarcolor2').click(theme2);
    $('#sidebarcolor3').click(theme3);
    $('#sidebarcolor4').click(theme4);
    $('#sidebarcolor5').click(theme5);
    $('#sidebarcolor6').click(theme6);
    $('#sidebarcolor7').click(theme7);
    $('#sidebarcolor8').click(theme8);

    function theme1() {
      $('html').attr('class', 'color-sidebar sidebarcolor1');
      localStorage.setItem('sidebar', 'color-sidebar sidebarcolor1');
    }

    function theme2() {
      $('html').attr('class', 'color-sidebar sidebarcolor2');
      localStorage.setItem('sidebar', 'color-sidebar sidebarcolor2');
    }

    function theme3() {
      $('html').attr('class', 'color-sidebar sidebarcolor3');
      localStorage.setItem('sidebar', 'color-sidebar sidebarcolor3');
    }

    function theme4() {
      $('html').attr('class', 'color-sidebar sidebarcolor4');
      localStorage.setItem('sidebar', 'color-sidebar sidebarcolor4');
    }
	
	function theme5() {
      $('html').attr('class', 'color-sidebar sidebarcolor5');
      localStorage.setItem('sidebar', 'color-sidebar sidebarcolor5');
    }
	
	function theme6() {
      $('html').attr('class', 'color-sidebar sidebarcolor6');
      localStorage.setItem('sidebar', 'color-sidebar sidebarcolor6');
    }

    function theme7() {
      $('html').attr('class', 'color-sidebar sidebarcolor7');
      localStorage.setItem('sidebar', 'color-sidebar sidebarcolor7');
    }

    function theme8() {
      $('html').attr('class', 'color-sidebar sidebarcolor8');
      localStorage.setItem('sidebar', 'color-sidebar sidebarcolor8');
    }
	
	
  }

}
