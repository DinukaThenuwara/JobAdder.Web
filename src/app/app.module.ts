import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateComponent } from './Components/candidate/candidate.component';
import { JobComponent } from './Components/job/job.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    JobComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
