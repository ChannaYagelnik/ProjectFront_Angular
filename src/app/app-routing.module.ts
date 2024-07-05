import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAppartmentComponent } from './components/add-appartment/add-appartment.component';
import { ConnectComponent } from './components/login/connect.component';
import { HomeComponent } from './components/home/home.component';
import { LogginComponent } from './components/signUp/loggin.component';



//מערך שבו נגדיר את הניתובים
const routes: Routes = [
  // {path:"myHome-שם שבחרתי",component:HomeComponentשם המחלקה של הקומפוננטה}
  {path:"",component:HomeComponent},
  {path:"myHome",component:HomeComponent},
  {path:"myLogin",component:LogginComponent},
  {path:"myConnect",component:ConnectComponent},
  {path:"myAddAppartment", component:AddAppartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
