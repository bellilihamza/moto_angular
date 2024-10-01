import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Type } from '../model/type.model';
import { Moto } from '../model/moto.model';
import { MotoService } from '../services/moto.service';

@Component({
  selector: 'app-add-moto',
  templateUrl: './add-moto.component.html'
})
export class AddMotoComponent implements OnInit {

  newMoto = new Moto();  // New motorcycle object
  types!: Type[];        // List of types
  newIdType!: number;    // ID for the new selected type
  newType!: Type;        // Selected type

  constructor(private motoService: MotoService, private router: Router) { }

  ngOnInit(): void {
    // Load the list of types for motorcycles from the service
    this.motoService.listeTypes().subscribe(types => {
      this.types = types;
      console.log(types);
    });
  }

  addMoto() {
    // Assign the selected type to the new motorcycle
    this.newMoto.type = this.types.find(type => type.idtype == this.newIdType)!;
    
    // Call the service to add the new motorcycle
    this.motoService.ajouterMoto(this.newMoto).subscribe(moto => {
      console.log(moto);
      // Navigate back to the motorcycle list view after successful addition
      this.router.navigate(['motos']);
    });
  }
}
