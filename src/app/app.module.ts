import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateComponent } from './Components/candidate/candidate.component';
import { JobComponent } from './Components/job/job.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { JobsContainerComponent } from './Components/jobs-container/jobs-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    JobComponent,
    DashboardComponent,
    JobsContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
