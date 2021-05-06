import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeSettingComponent } from "../home-setting/home-setting.component";

import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userData: any;
  userEmail: String;

  constructor(
    private dialog: MatDialog,
    private router: Router

  ) { }

  ngOnInit(): void {

    this.userData = JSON.parse(localStorage.getItem("loginData")); //normal
    console.log("user Data Checking", this.userData);

  }



  settingFunc() {
    // console.log("sfsfasd");
    this.dialog.open(HomeSettingComponent, {
      data: {
        data: this.userData,
        nonEdit: 'edit'
      }
    })
  }

}
