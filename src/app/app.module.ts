import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MonthsComponent } from './months/months.component';
import { MonthViewComponent } from './month-view/month-view.component';


@NgModule({
  imports:     [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
    { path: '', component: MonthsComponent },
    { path: 'month/:i', component: MonthViewComponent},
  ])],
  declarations: [
    AppComponent, TopBarComponent, MonthsComponent, MonthViewComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
