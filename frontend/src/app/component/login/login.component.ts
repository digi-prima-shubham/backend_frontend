import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserServiceService } from "../../services/user-service.service";
import { first } from "rxjs/operators";
import { DOCUMENT } from "@angular/common";
import { Router } from "@angular/router";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";
import { MatDialog } from '@angular/material/dialog';
import { RegistrationComponent } from "../registration/registration.component";
import { SocialAuthService, SocialUser, GoogleLoginProvider } from "angularx-social-login";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: SocialUser;
  horizontalPosition: MatSnackBarHorizontalPosition = 'left';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private UserServiceService: UserServiceService,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private authService: SocialAuthService,
    @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {

  }

  signInGoogle(): any {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      this.user = user;
      localStorage.setItem("googlLoginData", JSON.stringify(this.user))
      this.router.navigate(['home'])

    })
  }

  signOut(): any {
    this.authService.signOut();
  }

  login() {
    this.UserServiceService.getUsrById(this.loginForm.value).pipe(first()).subscribe((data: any) => {
      this.snackBar.open(data.message, 'Ok', {
        duration: 2000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition
      })
      localStorage.setItem("loginData", JSON.stringify(data.user))
      this.router.navigate(['home'])
    },
      err => {
        this.snackBar.open(err.error.message, 'Ok', {
          duration: 2000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition
        })
      }
    )
  }

  registerFunc() {
    this.dialog.open(RegistrationComponent)

  }
}
