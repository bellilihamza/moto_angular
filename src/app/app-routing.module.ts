import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMotoComponent } from './add-moto/add-moto.component'; // Replace with your AddMoto component
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ListeTypeComponent } from './liste-type/liste-type.component'; // Replace with your ListeTypes component
import { LoginComponent } from './login/login.component';
import { MotoGuard } from './moto.guard'; // Update to use your MotoGuard
import { MotosComponent } from './motos/motos.component'; // Replace with your Motos component
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component'; // Replace with your RechercheParType component
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component'; // Update if necessary
import { UpdateMotoComponent } from './update-moto/update-moto.component'; // Replace with your UpdateMoto component

const routes: Routes = [
  { path: "motos", component: MotosComponent }, // Updated for motos
  { path: "add-moto", component: AddMotoComponent, canActivate: [MotoGuard] }, // Updated for add moto
  { path: "updateMoto/:id", component: UpdateMotoComponent }, // Updated for updating moto
  { path: "rechercheParType", component: RechercheParTypeComponent }, // Updated for recherche by type
  { path: "rechercheParNom", component: RechercheParNomComponent }, // Keeps recherche by name component
  { path: "listeTypes", component: ListeTypeComponent }, // Updated for listing types
  { path: 'login', component: LoginComponent },
  { path: 'app-forbidden', component: ForbiddenComponent },
  { path: "", redirectTo: "motos", pathMatch: "full" } // Redirect to motos
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
