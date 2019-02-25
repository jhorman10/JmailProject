import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevoComponent } from './components/shared/nuevo/nuevo.component';
import { EliminadosComponent } from './components/shared/eliminados/eliminados.component';
import { BandejaentradaComponent } from './components/shared/bandejaentrada/bandejaentrada.component';
import { EnviadosComponent } from './components/shared/enviados/enviados.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './components/home/home.component';

const app_routes: Routes = [
  
  { path: 'home', component:HomeComponent },
  { path: 'Bandeja de entrada', component: BandejaentradaComponent },
  { path: 'Nuevo', component: NuevoComponent},
  { path: 'Eliminado', component: EliminadosComponent},
  { path: 'Enviados', component: EnviadosComponent},
  { path: 'login', component:LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
