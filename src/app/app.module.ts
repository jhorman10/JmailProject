import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// servicios

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BandejaentradaComponent } from './components/shared/bandejaentrada/bandejaentrada.component';
import { NuevoComponent } from './components/shared/nuevo/nuevo.component';
import { EnviadosComponent } from './components/shared/enviados/enviados.component';
import { EliminadosComponent } from './components/shared/eliminados/eliminados.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { BannerComponent } from './components/shared/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BandejaentradaComponent,
    NuevoComponent,
    EnviadosComponent,
    EliminadosComponent,
    NavbarComponent,
    LoginComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
