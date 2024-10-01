import { Component, OnInit } from '@angular/core';
import { Type } from '../model/type.model';  
import { MotoService } from '../services/moto.service';  

@Component({
  selector: 'app-liste-type',
  templateUrl: './liste-type.component.html',
  styleUrls: ['./liste-type.component.css'] // Fixed to 'styleUrls'
})
export class ListeTypeComponent implements OnInit { // Implement OnInit
  types!: Type[];  
  ajout: boolean = true;
  updatedType: Type = { idtype: 0, nomType: "" };  

  constructor(private motoService: MotoService) { }  

  ngOnInit(): void {
    this.chargerTypes();  
  }

  chargerTypes() {
    this.motoService.listeTypes().subscribe(types => {  
      this.types = types;  // Directly assign if it's an array
      console.log(types);
    });
  }

  typeUpdated(type: Type) {
    console.log("Type reçu du composant updateType ", type);
    this.motoService.ajouterType(type).subscribe(() => this.chargerTypes());  
  }

  updateType(type: Type) {
    this.updatedType = type;  
    this.ajout = false;
  }
}
