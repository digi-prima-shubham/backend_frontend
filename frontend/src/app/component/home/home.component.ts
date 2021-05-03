import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeSettingComponent } from "../home-setting/home-setting.component";
import { SocialAuthService, SocialUser, GoogleLoginProvider } from "angularx-social-login";
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userData: any;
  googleData: any;
  userEmail: String;
  token: any;
  df: boolean = false;
  sf: boolean = false;

  constructor(
    private dialog: MatDialog,
    private authService: SocialAuthService,
    private router: Router

  ) { }

  ngOnInit(): void {

    this.userData = JSON.parse(localStorage.getItem("loginData")); //normal

    this.googleData = JSON.parse(localStorage.getItem('googlLoginData')) // google
    // console.log("photourl", this.googleData.photoUrl);

    if (this.googleData !== 'null') {
      this.df = true
    }
    else if (this.userData !== 'null') {
      this.sf = true
    }
    this.userEmail = this.userData.email
  }

  signOut(): any {
    // this.authService.signOut();
    localStorage.clear();
    this.router.navigate(['login'])
  }

  settingFunc() {
    // console.log("sfsfasd");
    this.dialog.open(HomeSettingComponent)
  }

}
