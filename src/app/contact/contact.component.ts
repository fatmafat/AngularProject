import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  showModal: boolean = false;
  name: string = '';
  email: string = '';
  message: string = '';

  openPopup() {
    this.showModal = true;
  }

  closePopup() {
    this.showModal = false;
  }

  sendMessage() {
    console.log("Nom:", this.name);
    console.log("Email:", this.email);
    console.log("Message:", this.message);
    alert("Message envoyé !");
    this.closePopup();

    // Réinitialiser les champs
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
