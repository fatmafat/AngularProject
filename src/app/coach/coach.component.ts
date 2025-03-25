import { Component } from '@angular/core';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent {
  coachs = [
    {
      nom: 'Doe',
      prenom: 'John',
      specialite: 'Fitness',
      image: 'assets/boxingkids.jpeg'
    },
    {
      nom: 'Smith',
      prenom: 'Jane',
      specialite: 'Yoga',
      image: 'assets/boxingkids.jpeg'
    },
    {
      nom: 'Ali',
      prenom: 'Yasmine',
      specialite: 'Boxe',
      image: 'assets/boxingkids.jpeg'
    }
  ];
}
