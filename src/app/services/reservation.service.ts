// reservation.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  selectedCours: any; // pour stocker le cours sélectionné

  constructor() {}

  setSelectedCours(cours: any) {
    this.selectedCours = cours;
  }

  getSelectedCours() {
    return this.selectedCours;
  }

  decrementPlaces() {
    if (this.selectedCours && this.selectedCours.places > 0) {
      this.selectedCours.places--;
    }
  }
}
