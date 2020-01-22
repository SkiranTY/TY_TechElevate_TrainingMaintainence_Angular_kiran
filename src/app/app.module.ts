import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { CalenderComponent } from './calender/calender.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BatchdetailsComponent } from './batchdetails/batchdetails.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterFormComponent,
    SchedulerComponent,
    CalenderComponent,
    FooterComponent,
    DashboardComponent,
    BatchdetailsComponent,
    StudentdetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'register-form', component: RegisterFormComponent },
      { path: 'schedular', component: SchedulerComponent },
      { path: 'calender', component: CalenderComponent },
      { path: 'dashboard', component: DashboardComponent},
      { path: 'batchdetails', component: BatchdetailsComponent},
      { path: 'studentdetails', component: StudentdetailsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
