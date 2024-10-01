import { Component, OnInit } from '@angular/core';
import { Type } from '../model/type.model'; // Import the Type model
import { Moto } from '../model/moto.model'; // Import the Moto model
import { MotoService } from '../services/moto.service'; // Assuming you have a MotoService

@Component({
  selector: 'app-recherche-par-type',
  templateUrl: './recherche-par-type.component.html',
  styles: []
})
export class RechercheParTypeComponent implements OnInit {
  idType!: number;
  types!: Type[]; // Change to hold types
  motos!: Moto[]; // Change to hold motos

  constructor(private motoService: MotoService) { }

  ngOnInit(): void {
    // Fetch types instead of categories
    this.motoService.listeTypes() // Make sure you have this method in your MotoService
      .subscribe(types => {
        this.types = types; // Assuming your API returns a list of types
        console.log(types);
      });
  }

  onChange() {
    // Fetch motos by selected type
    this.motoService.rechercherParType(this.idType) // Make sure to implement this method in your MotoService
      .subscribe(motos => {
        this.motos = motos;
      });
  }
}
