import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StyleRenderer, ThemeVariables, lyl } from '@alyle/ui';
import { FormGroup, FormControl } from '@angular/forms';
import { UserServiceService } from "src/app/services/user-service.service";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";

import { first } from "rxjs/operators";

const STYLES = (theme: ThemeVariables) => ({
  $global: lyl`{
    body {
      background-color: ${theme.background.default}
      color: ${theme.text.default}
      font-family: ${theme.typography.fontFamily}
      margin: 0
      direction: ${theme.direction}
    }
  }`,
  root: lyl`{
    display: block
  }`
});

@Component({
  selector: 'app-home-setting',
  templateUrl: './home-setting.component.html',
  styleUrls: ['./home-setting.component.scss'],
  providers: [StyleRenderer],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeSettingComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'left';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  readonly classes = this.sRenderer.renderSheet(STYLES, true);
  userData: any;
  nonEdit: any;
  registerform: FormGroup;
  constructor(
    private UserServiceService: UserServiceService,
    private snackBar: MatSnackBar,
    readonly sRenderer: StyleRenderer,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<HomeSettingComponent>,
  ) {

    this.userData = this.data.data;
    this.nonEdit = this.data.nonEdit;

    if (this.nonEdit == 'edit') {
      this.registerform = new FormGroup({
        firstname: new FormControl({ value: this.userData.firstname, disabled: true }),
        lastname: new FormControl({ value: this.userData.lastname, disabled: true }),
        mobile_no: new FormControl(''),
        user_name: new FormControl({ value: this.userData.user_name, disabled: true }),
        email: new FormControl({ value: this.userData.email, disabled: true }),
        password: new FormControl('')
      })
    }

  }

  ngOnInit(): void {
  }

  submitForm() {
    this.UserServiceService.updateById(this.userData._id, this.registerform.value).pipe(first()).subscribe((data: any) => {
      console.log("0000000", data);
      if (data.status == "success") {
        this.snackBar.open(data.message, 'Ok', {
          duration: 2000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition
        })
      }

      setTimeout(() => {
        this.dialogRef.close();
      }, 1000)

    })
  }
}
