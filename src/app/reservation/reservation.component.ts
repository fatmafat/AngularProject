import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  reservationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reservationForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      cin: ['', [Validators.required, Validators.pattern(/^[A-Z0-9]{8}$/)]], // Exemple de CIN
    });
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      console.log('Réservation envoyée :', this.reservationForm.value);
      // tu peux ensuite appeler ton service ici
    } else {
      console.log('Formulaire invalide');
    }
  }

}
