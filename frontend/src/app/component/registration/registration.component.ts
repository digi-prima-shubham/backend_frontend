import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserServiceService } from "../../services/user-service.service";
import { first } from "rxjs/operators";
import { DOCUMENT } from "@angular/common";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'left';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  registerform = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    salutation: new FormControl(''),
    contact_no: new FormControl(''),
    mobile_no: new FormControl(''),
    user_name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  // loginForm = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl('')
  // })

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.log(this.registerform.value);
    this.UserServiceService.add_users(this.registerform.value).pipe(first()).subscribe((data: any) => {
      console.log("Checking When Add data", data);
      this.snackBar.open(data.message, 'Ok', {
        duration: 2000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition
      })
    },
      err => {
        this.snackBar.open(err.error.message, 'Ok', {
          duration: 2000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition
        })
        console.log("having some error", err.error);
      }
    )
    // this._document.defaultView.location.reload();
  }

  // login() {
  //   this.UserServiceService.getUsrById(this.loginForm.value).pipe(first()).subscribe((data: any) => {
  //     console.log("Checking login data", data);
  //     this.snackBar.open(data.message, 'Ok', {
  //       duration: 2000,
  //       horizontalPosition: this.horizontalPosition,
  //       verticalPosition: this.verticalPosition
  //     })
  //   },
  //     err => {
  //       this.snackBar.open(err.error.message, 'Ok', {
  //         duration: 2000,
  //         horizontalPosition: this.horizontalPosition,
  //         verticalPosition: this.verticalPosition
  //       })
  //       console.log("having some error", err.error);
  //     }
  //   )
  // }

  constructor(private UserServiceService: UserServiceService,
    private snackBar: MatSnackBar,
    @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
    // this.UserServiceService.show_users().pipe(first()).subscribe((data: any) => {
    //   // console.log("checking data", data);
    // })
  }
}
