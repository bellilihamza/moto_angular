import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MotosComponent } from './motos/motos.component'; // Replace with your Moto component
import { AddMotoComponent } from './add-moto/add-moto.component'; // Replace with your AddMoto component
import { UpdateMotoComponent } from './update-moto/update-moto.component'; // Replace with your UpdateMoto component
import { HttpClientModule } from '@angular/common/http';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component'; // Replace with your RechercheParType component
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component'; // Update if necessary
import { FilterPipe } from './filter.pipe';
import { ListeTypeComponent } from './liste-type/liste-type.component'; // Replace with your ListeTypes component
import { UpdateTypeComponent } from './update-type/update-type.component'; // Replace with your UpdateType component
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MotosComponent,
    AddMotoComponent,
  
    FilterPipe,
    LoginComponent,
    ForbiddenComponent,
    RechercheParTypeComponent,
    RechercheParNomComponent,
    ListeTypeComponent,
    UpdateTypeComponent,
    UpdateMotoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
