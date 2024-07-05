import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainMenueComponent } from './components/main-menue/main-menue.component';
import { HomeComponent } from './components/home/home.component';
import { LogginComponent } from './components/signUp/loggin.component';
import { ConnectComponent } from './components/login/connect.component';
import { AppRoutingModule } from './app-routing.module';
import { AddAppartmentComponent } from './components/add-appartment/add-appartment.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { ChangeLookDirective } from './directive/change-look.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainMenueComponent,
    HomeComponent,
    LogginComponent,
    ConnectComponent,
    AddAppartmentComponent,
    TranslatePipe,
    ChangeLookDirective,
  
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule, HttpClientModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
