import { Component , Inject, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';
import { DOCUMENT } from '@angular/common';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit{
    elem;
    showCloseIcon: boolean = false;
    currentUser:any;
    imgPath = environment.imgUrl;
    constructor(public sidebarservice: SidebarService,
        private authService: AuthService,
        public router: Router,
        @Inject(DOCUMENT) private document: any) {
            
         }
        
    toggleSidebar() {
        this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
    }
    
    getSideBarState() {
        return this.sidebarservice.getSidebarState();
    }

    hideSidebar() {
        this.sidebarservice.setSidebarState(true);
    }

    ngOnInit() {
        this.elem = document.documentElement;
        /* Search Bar */
        // $(document).ready(function () {
        //     $(".mobile-search-icon").on("click", function () {
        //         $(".search-bar").addClass("full-search-bar")
        //     }), 
        //     $(".search-close").on("click", function () {
        //         $(".search-bar").removeClass("full-search-bar")
        //     })
        // });
        if (localStorage.length > 0) {
            this.currentUser =
              JSON?.parse(localStorage?.getItem("currentUser") || "");
        }
    }

    viewProfile() {
        this.router.navigate(['user-profile'], { queryParams: { id: this.currentUser?.id, type: 'edit' } });
        setTimeout(() => {
            location.reload();
        }, 500);
    }

    /** Open Full Screen on Click */
    openFullscreen() {
        if (this.elem.requestFullscreen) {
            this.elem.requestFullscreen();
            this.showCloseIcon = true;
        } else if (this.elem.mozRequestFullScreen) {
            /* Firefox */
            this.elem.mozRequestFullScreen();
            this.showCloseIcon = true;
        } else if (this.elem.webkitRequestFullscreen) {
            /* Chrome, Safari and Opera */
            this.elem.webkitRequestFullscreen();
            this.showCloseIcon = true;
          } else if (this.elem.msRequestFullscreen) {
            /* IE/Edge */
            this.elem.msRequestFullscreen();
            this.showCloseIcon = true;
          }
    }

    /* Close fullscreen */
    closeFullscreen() {
        if (document.exitFullscreen) {
            this.document.exitFullscreen();
            this.showCloseIcon = false;
        } else if (this.document.mozCancelFullScreen) {
            /* Firefox */
            this.document.mozCancelFullScreen();
            this.showCloseIcon = false;
        } else if (this.document.webkitExitFullscreen) {
            /* Chrome, Safari and Opera */
            this.document.webkitExitFullscreen();
            this.showCloseIcon = false;
        } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
        this.showCloseIcon = false;
        }
    }
      /**
   * Function to logout user
   */
  logout() {
    this.authService.logout();
    location.assign('/auth/sign-in');
  }
}
