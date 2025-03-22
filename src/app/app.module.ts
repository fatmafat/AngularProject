import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

// ✅ Importation des modules Angular Material nécessaires
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select'; 
import { MatRadioModule } from '@angular/material/radio'; 
import { MatCheckboxModule } from '@angular/material/checkbox'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuillComponent } from './acceuill/acceuill.component';
import { ClassesComponent } from './classes/classes.component';
import { PlanningComponent } from './planning/planning.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CoachComponent } from './coach/coach.component';
import { FooterComponent } from './footer/footer.component';
import { ReservationComponent } from './reservation/reservation.component';
import { TarifsComponent } from './tarifs/tarifs.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuillComponent,
    ClassesComponent,
    PlanningComponent,
    SignupComponent,
    ContactComponent,
    NavbarComponent,
    CoachComponent,
    FooterComponent,
    ReservationComponent,
    TarifsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule, // ✅ Ajouté
    MatRadioModule,  // ✅ Ajouté
    MatCheckboxModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
