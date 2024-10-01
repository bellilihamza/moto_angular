import { Component, OnInit } from '@angular/core';
import { Moto } from '../model/moto.model'; // Import the Moto model
import { MotoService } from '../services/moto.service'; // Change to use MotoService

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: []
})
export class RechercheParNomComponent implements OnInit {

  nomMoto!: string; // Renamed to reflect the search for motorcycles
  motos!: Moto[]; // Change to Moto[]
  allMotos!: Moto[]; // Added to store the original list of motos
  searchTerm!: string;

  constructor(private motoService: MotoService) { }

  ngOnInit(): void {
    this.motoService.listeMoto().subscribe(motos => {
      console.log(motos);
      this.motos = motos;
      this.allMotos = motos; // Store the original list for filtering
    });
  }

  rechercherMotos() {
    this.motoService.rechercherParNom(this.nomMoto).subscribe(motos => {
      console.log(motos);
      this.motos = motos;
    });
  }

  onKeyUp(filterText: string) {
    this.motos = this.allMotos.filter(item =>
      item.nomMoto.toLowerCase().includes(filterText.toLowerCase())); // Ensure case-insensitive search
  }
}
