import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuillComponent } from './acceuill/acceuill.component';
import { ClassesComponent } from './classes/classes.component';
import { PlanningComponent } from './planning/planning.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReservationComponent } from './reservation/reservation.component';
import { TarifsComponent } from './tarifs/tarifs.component';
const routes: Routes = [
  {path:'',component:AcceuillComponent},
  {path:"classes",component:ClassesComponent},
  {path:"planning",component:PlanningComponent},
  {path:"contact",component:ContactComponent},
  {path:"signup",component:SignupComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"tarif",component:TarifsComponent},
  {path:"coach",component:NavbarComponent},
  {path:"res",component:ReservationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
