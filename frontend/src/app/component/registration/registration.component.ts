import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserServiceService } from "../../services/user-service.service";
import { first } from "rxjs/operators";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerform = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    salutation: new FormControl(''),
    contact_no: new FormControl(''),
    mobile_no: new FormControl(''),
    user_name: new FormControl('')
  })

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.registerform.value);
    this.UserServiceService.add_users(this.registerform.value).pipe(first()).subscribe((data: any) => {
      console.log("Checking When Add data", data);
      this._document.defaultView.location.reload();
      // this.ngOnInit();
    })
  }
  constructor(private UserServiceService: UserServiceService,
    @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
    this.UserServiceService.show_users().pipe(first()).subscribe((data: any) => {
      console.log("checking data", data);
    })
  }
}
