import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from '@angular/forms';
import { PagenotfounfdComponent } from './component/pagenotfounfd/pagenotfounfd.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatCardModule } from "@angular/material/card";
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { HomeSettingComponent } from './component/home-setting/home-setting.component';
import { MatDialogModule } from "@angular/material/dialog";
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { LyHammerGestureConfig, LyThemeModule, LY_THEME, LY_THEME_NAME, StyleRenderer, LyTheme2 } from '@alyle/ui';
import { MinimaLight } from '@alyle/ui/themes/minima';
import { LyButtonModule } from '@alyle/ui/button';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyImageCropperModule } from '@alyle/ui/image-cropper';
import { LyFieldModule } from '@alyle/ui/field';
import { LyGridModule } from '@alyle/ui/grid';
import { LyIconModule } from '@alyle/ui/icon';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    PagenotfounfdComponent,
    LoginComponent,
    HomeComponent,
    HomeSettingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatSelectModule,
    MatInputModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    SocialLoginModule,
    HammerModule,
    LyButtonModule,
    LyToolbarModule,
    LyImageCropperModule,
    LyFieldModule,
    LyGridModule,
    LyIconModule
  ],
  providers: [{ provide: HAMMER_GESTURE_CONFIG, useClass: LyHammerGestureConfig }, StyleRenderer, LyTheme2, { provide: LY_THEME_NAME, useValue: 'minima-light' }, { provide: LY_THEME, useClass: MinimaLight, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
