import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
  HttpClient,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { NotificationService } from "../services/notification.service";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { AuthService } from "../services/auth.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
 
  url: any;
  requestedToken:any;

  constructor(
    public notificationService: NotificationService,
    private router: Router,
    public http: HttpClient,
    private authService: AuthService
  ) {
    this.url = environment?.apiUrl;
  }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const getToken: string | any = localStorage.getItem("token");
    let token = JSON.parse(getToken);

    if (token) {
      request = request.clone({
        headers: request.headers.set("Authorization", "Bearer " +token)
      });
    }

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log(event, 'Interceptor Event');
          if(event?.body?.message == "Unauthenticated."){ 
            this.authService.logout();
            location.assign('/auth/sign-in');
          }
        }
        return event;
      }),
      catchError((error: any) => {
        if(error?.status == 401) {
          return this.authService.refreshToken().pipe(
            switchMap((res:any) => {
              console.log(res, 'resge')
              this.requestedToken = res?.access_token;

              return next.handle(request.clone({
                  setHeaders: {
                    Authorization: `Bearer ${this.requestedToken}`
                  }
              }))
            })
          )
        }
        return throwError(error.error.message);
      })
    );
  }
}
