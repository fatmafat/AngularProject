import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
  inscriptionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.inscriptionForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      genre: ['', Validators.required],
      abonnement: ['', Validators.required],
      conditions: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.inscriptionForm.valid) {
      console.log('Inscription réussie !', this.inscriptionForm.value);
    } else {
      console.log('Veuillez remplir correctement le formulaire.');
    }
  }
}