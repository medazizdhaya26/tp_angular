import { Component } from '@angular/core';
import {Residence} from "../models/models_Residence";

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
  listResidences: Residence[] = [
    { id: 1, name: 'El fel', address: 'Borj Cedria', image: '../../assets/facade-verdia-1.jpg', status: 'Disponible' },
    { id: 2, name: 'El yasmine', address: 'Ezzahra', image: '../../assets/téléchargement (1).jpg', status: 'Disponible' },
    { id: 3, name: 'El Arij', address: 'Rades', image: '../../assets/téléchargement (2).jpg', status: 'Vendu' },
    { id: 4, name: 'El Anber', address: 'inconnu', image: '../../assets/téléchargement.jpg', status: 'En Construction' }
  ];

  favorites: Residence[] = [];
  filterText: string = '';

  showLocation(address: string) {
    if (address === 'inconnu') {
      alert('L’adresse de cette résidence est inconnue.');
    } else {
      alert(`Adresse : ${address}`);
    }
  }

  likeResidence(residence: Residence) {
    if (!this.favorites.includes(residence)) {
      this.favorites.push(residence);
      alert(`${residence.name} ajoutée aux favoris !`);
    } else {
      alert(`${residence.name} est déjà dans vos favoris.`);
    }
  }

  get filteredResidences() {
    return this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
