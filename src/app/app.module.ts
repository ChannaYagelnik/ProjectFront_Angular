import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainMenueComponent } from './components/main-menue/main-menue.component';
import { HomeComponent } from './components/home/home.component';
import { LogginComponent } from './components/loggin/loggin.component';
import { ConnectComponent } from './components/connect/connect.component';
import { AppRoutingModule } from './app-routing.module';
import { AddAppartmentComponent } from './components/add-appartment/add-appartment.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenueComponent,
    HomeComponent,
    LogginComponent,
    ConnectComponent,
    AddAppartmentComponent,
  
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule, HttpClientModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
