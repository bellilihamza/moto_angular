import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Type } from '../model/type.model';
import { Moto } from '../model/moto.model';
import { MotoService } from '../services/moto.service';

@Component({
  selector: 'app-update-moto',
  templateUrl: './update-moto.component.html',
  styles: []
})
export class UpdateMotoComponent implements OnInit {

  currentMoto = new Moto();  // Current motorcycle being updated
  types!: Type[];            // List of available types
  updatedTypeId!: number;    // ID of the selected type
  
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private motoService: MotoService) { }

  ngOnInit(): void {
    // Load the list of types
    this.motoService.listeTypes().subscribe(types => {
      this.types = types;
      console.log(types);
    });

    // Load the current motorcycle based on the ID from the route
    this.motoService.consulterMoto(this.activatedRoute.snapshot.params['id'])
      .subscribe(moto => {
        this.currentMoto = moto;
        this.updatedTypeId = this.currentMoto.type.idtype; // Pre-select the current type
      });
  }

  updateMoto() {
    // Assign the selected type to the current motorcycle
    this.currentMoto.type = this.types.find(type => type.idtype === this.updatedTypeId)!;
    
    // Call the service to update the motorcycle
    this.motoService.updateMoto(this.currentMoto).subscribe(() => {
      this.router.navigate(['motos']); // Navigate back to the list after updating
    });
  }
}
