import { Component, OnInit } from '@angular/core';
import { Moto } from '../model/moto.model';
import { AuthService } from '../services/auth.service';
import { MotoService } from '../services/moto.service';

@Component({
  selector: 'app-motos',
  templateUrl: './motos.component.html'
})
export class MotosComponent implements OnInit {

  motos?: Moto[]; // a list of motorcycles

  constructor(private motoService: MotoService,
              public authService: AuthService) {
   // this.motos = [];
  }

  ngOnInit(): void {
    this.chargerMotos();
  }

  chargerMotos() {
    this.motoService.listeMoto().subscribe(motos => {
      console.log(motos);
      this.motos = motos;
    });
  }

  supprimerMoto(moto: Moto) {
    let conf = confirm("Êtes-vous sûr ?");
    if (conf) {
      this.motoService.supprimerMoto(moto.idMotot).subscribe(() => {
        console.log("Moto supprimée");
        this.chargerMotos();     
      });
    }
  }

}
