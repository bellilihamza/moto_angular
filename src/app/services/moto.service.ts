import { Injectable } from '@angular/core';
import { Moto } from '../model/moto.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Type } from '../model/type.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MotoService {
  apiURL: string = 'http://localhost:8001/motos/api';
  apiURLType: string = 'http://localhost:8001/motos/api/types';

  motos: Moto[]; // array of motorcycles

  constructor(private http: HttpClient) {
    this.motos = [
      {
        idMotot: 1,
        nomMoto: 'Yamaha R1',
        prixMoto: 15000.50,
        dateCreation: new Date('03/10/2019'),
        type: { idtype: 1, nomType: 'Sport' }
      },
      {
        idMotot: 2,
        nomMoto: 'Harley Davidson',
        prixMoto: 20000,
        dateCreation: new Date('05/22/2017'),
        type: { idtype: 2, nomType: 'Cruiser' }
      },
      {
        idMotot: 3,
        nomMoto: 'Ducati Monster',
        prixMoto: 17000,
        dateCreation: new Date('09/15/2021'),
        type: { idtype: 1, nomType: 'Sport' }
      }
    ];
  }

  listeMoto(): Observable<Moto[]> {
    return this.http.get<Moto[]>(this.apiURL);
  }

  ajouterMoto(moto: Moto): Observable<Moto> {
    return this.http.post<Moto>(this.apiURL, moto, httpOptions);
  }

  supprimerMoto(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterMoto(id: number): Observable<Moto> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Moto>(url);
  }

  trierMotos() {
    this.motos = this.motos.sort((m1, m2) => {
      if (m1.idMotot > m2.idMotot) {
        return 1;
      }
      if (m1.idMotot < m2.idMotot) {
        return -1;
      }
      return 0;
    });
  }

  updateMoto(moto: Moto): Observable<Moto> {
    return this.http.put<Moto>(this.apiURL, moto, httpOptions);
  }

  listeTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(this.apiURLType);
  }

  rechercherParType(idtype: number): Observable<Moto[]> {
    const url = `${this.apiURL}/motosType/${idtype}`;
    return this.http.get<Moto[]>(url);
  }

  rechercherParNom(nom: string): Observable<Moto[]> {
    const url = `${this.apiURL}/motosByName/${nom}`;
    return this.http.get<Moto[]>(url);
  }

  ajouterType(type: Type): Observable<Type> {
    return this.http.post<Type>(this.apiURLType, type, httpOptions);
  }
}
