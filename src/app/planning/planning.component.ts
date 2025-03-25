import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {
  planning: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    const storedPlanning = localStorage.getItem('planning');
    if (storedPlanning) {
      this.planning = JSON.parse(storedPlanning);
    } else {
      // Si rien dans localStorage, initialise avec les valeurs par défaut
      this.planning = [
        {
          cours: [
            { nom: 'Body Pump', heure: '16H30', places: 15 },
            { nom: '100% ABDO', heure: '17H00', places: 15 },
            { nom: 'Taekwondo(KIDS)', heure: '16H30', places: 18 },
            { nom: 'Body Attack', heure: '20H30', places: 20 },
            { nom: 'CAF', heure: '21H30', places: 21 },
          ]
        },
        {
          cours: [
            { nom: 'BOXING (ADULTE)', heure: '16H30', places: 20 },
            { nom: 'Bootcamp', heure: '20H30', places: 15 },
            { nom: 'GRIT', heure: '19:30 - 20:15', places: 16 }
          ]
        },
        {
          cours: [
            { nom: 'Pilates', heure: '15H00', places: 15 },
            { nom: 'Body Pump', heure: '16H30', places: 18 },
            { nom: 'Strength Development(NEW)', heure: '17H00', places: 20 },
            { nom: 'Teakwondo(KIDS)', heure: '16H30', places: 17 },
            { nom: 'Boody Combat', heure: '20H30', places: 15 },
          ]
        },
        {
          cours: [
            { nom: 'BOXING (KIDS)', heure: '15H00', places: 15 },
            { nom: 'BOXING (ADULTE)', heure: '16H30', places: 14 },
            { nom: '100% ABDO ', heure: '16H30', places: 22 },
            { nom: 'INDOOR CYCLING ', heure: '20H30', places: 22 },
            { nom: 'yoga (pour les femmes) ', heure: '20H30', places: 22 },
            { nom: 'Gymnastique (KIDS)', heure: '14H00', places: 10 }
          ]
        },
        {
          cours: [
            { nom: 'TRX', heure: '16H30', places: 14 },
            { nom: 'Taekwondo(KIDS)', heure: '16H30', places: 13 },
            { nom: 'Body Pump', heure: '20H30', places: 14 },
            { nom: 'Orientale', heure: '21H30', places: 15 },
          ]
        },
        {
          cours: []
        }
      ];
      // Sauvegarder dans le localStorage une première fois
      localStorage.setItem('planning', JSON.stringify(this.planning));
    }
  }

  ResPlaces(i: number, j: number) {
    localStorage.setItem('selectedCours', JSON.stringify({ i, j }));
    this.router.navigate(['/res']);
  }
}
