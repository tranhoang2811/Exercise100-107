import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercise100Component } from './exercise100/exercise100.component';
import { Exercise101Component } from './exercise101/exercise101.component';
import { Exercise102Component } from './exercise102/exercise102.component';
import { Exercise103Component } from './exercise103/exercise103.component';
import { Exercise104Component } from './exercise104/exercise104.component';
import { Exercise105Component } from './exercise105/exercise105.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercise100Component,
    Exercise101Component,
    Exercise102Component,
    Exercise103Component,
    Exercise104Component,
    Exercise105Component,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
