import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar: MatSnackBar, public dialog: MatDialog) { }

  /**
   * Function to Show success Snackbar
   * @param message 
   * @param action 
   */
  openSuccessSnackBar(message: string, action: string = 'Ok') {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: ['green-snackbar'],
      verticalPosition: 'top',
      horizontalPosition: 'end'
    });
  }

  /**
   * Function to Show Failure snackbar
   * @param message 
   * @param action 
   */
  openFailureSnackBar(message: string, action: string = 'Close') {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: ['red-snackbar'],
      verticalPosition: 'top',
      horizontalPosition: 'end'
    });
  }

  openWarningSnackBar(message: string, action: string = 'Ok') {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: ['warning-snackbar'],
      verticalPosition: 'top',
      horizontalPosition: 'end'
    });
  }

  success(message: string) {
    Swal.fire({text: message, icon:'success', timer: 1500});
  }
  warning(message: string) {
    Swal.fire( {text: message, icon: 'warning', timer: 1500});
  }
  error(message: string) {
    Swal.fire( {text: message, icon: 'error',  timer: 1500})
  }


  openSuccessAlert(message: string, action: string = "Ok") {
    // const dialogRef = this.dialog.open(DialogAlertBoxComponent, {
    //   width: '280px',
    //   panelClass: 'alert-success',
    //   data: { message: message, action: action }
    // });
    // setTimeout(() => {
    //   dialogRef.close()
    // }, 1500);
  }
  openWarningAlert(message: string, action: string = "Ok") {
    // const dialogRef = this.dialog.open(DialogAlertBoxComponent, {
    //   width: '280px',
    //   panelClass: 'alert-warning',
    //   data: { message: message, action: action }
    // });
    // setTimeout(() => {
    //   dialogRef.close()
    // }, 1500);
  }
  openErrorAlert(message: string, action: string = "Ok") {
  //   const dialogRef = this.dialog.open(DialogAlertBoxComponent, {
  //     width: '280px',
  //     panelClass: 'alert-error',
  //     data: { message: message, action: action }
  //   });
  //   setTimeout(() => {
  //     dialogRef.close()
  //   }, 3000);
  }
}
