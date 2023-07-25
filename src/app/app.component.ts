import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        if (event?.url == '/') {
          this.router.navigate(['/dashboard']);
        }
      }
    });
    let data: any = localStorage.getItem("token");
    const token = JSON.parse(data);
   
    if (token) {
    //   console.log('njhgj')
    // this.router.navigate(['/dashboard']);
    }else {
      this.router.navigate(['/auth/sign-in']);
    }
  }

}
