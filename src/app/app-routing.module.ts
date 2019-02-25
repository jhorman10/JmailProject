import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevoComponent } from './components/shared/nuevo/nuevo.component';
import { EliminadosComponent } from './components/shared/eliminados/eliminados.component';
import { BandejaentradaComponent } from './components/shared/bandejaentrada/bandejaentrada.component';
import { EnviadosComponent } from './components/shared/enviados/enviados.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LoginGuard } from './login/login.guard';
import { AppComponent } from './app.component';

const app_routes: Routes = [
  
  { path: 'Home', component:HomeComponent, canActivate: [LoginGuard] },
  { path: 'Bandeja de entrada', component: BandejaentradaComponent, canActivate: [LoginGuard] },
  { path: 'Nuevo', component: NuevoComponent, canActivate: [LoginGuard]},
  { path: 'Eliminado', component: EliminadosComponent, canActivate: [LoginGuard]},
  { path: 'Enviados', component: EnviadosComponent, canActivate: [LoginGuard]},
  { path: 'Login', component:LoginComponent },
  { path: 'App', component: AppComponent, canActivate: [LoginGuard] },
  { path: '', pathMatch: 'full', redirectTo: 'Login' },
  { path: '**', pathMatch: 'full', redirectTo: 'Login' }
];


@NgModule({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
