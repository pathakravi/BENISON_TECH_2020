import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeDetailsComponent,
    FeedbackListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
