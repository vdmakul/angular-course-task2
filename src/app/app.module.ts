import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MaterialModule} from './material/material.module';
import { HeaderComponent } from './header/header.component';
import {GITHUB_URL, GITHUB_URL_TOKEN} from '../conf';
import {SearchService} from './common/services/search.service';
import {ResultsService} from './common/services/results.service';
import { ResultsComponent } from './results/results.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    SearchService,
    ResultsService,
    {
      provide: GITHUB_URL_TOKEN,
      useValue: GITHUB_URL
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
