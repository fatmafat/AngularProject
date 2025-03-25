import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  reservationForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.reservationForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      cin: ['', [Validators.required, Validators.pattern(/^[A-Z0-9]{8}$/)]]
    });
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      console.log('Réservation envoyée :', this.reservationForm.value);

      const selected = JSON.parse(localStorage.getItem('selectedCours') || '{}');
      if (selected && selected.i !== undefined && selected.j !== undefined) {
        // Récupérer le planning, décrémenter et le remettre à jour
        const planning = JSON.parse(localStorage.getItem('planning') || '[]');
        if (planning[selected.i]?.cours[selected.j]) {
          planning[selected.i].cours[selected.j].places -= 1;
          localStorage.setItem('planning', JSON.stringify(planning));
        }
      }

      // Rediriger vers le planning
      this.router.navigate(['/planning']);
    } else {
      console.log('Formulaire invalide');
    }
  }
}
