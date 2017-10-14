import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MaterialModule} from './material/material.module';
import { HeaderComponent } from './header/header.component';
import {GITHUB_URL, GITHUB_URL_TOKEN} from '../conf';
import {SearchService} from './common/services/search.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [
    SearchService,
    {
      provide: GITHUB_URL_TOKEN,
      useValue: GITHUB_URL
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
