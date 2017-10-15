import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MaterialModule} from './material/material.module';
import {HeaderComponent} from './header/header.component';
import {GITHUB_URL, GITHUB_URL_TOKEN} from '../conf';
import {SearchService} from './common/services/search.service';
import {ResultsService} from './common/services/results.service';
import {ResultsComponent} from './results/results.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {GithubInterceptorService} from './common/services/github-interceptor.service';
import {MatProgressSpinnerModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    SearchService,
    ResultsService,
    {
      provide: GITHUB_URL_TOKEN,
      useValue: GITHUB_URL
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GithubInterceptorService,
      multi: true
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
