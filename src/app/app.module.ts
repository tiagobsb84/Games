import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SectionComponent } from './components/section/section.component';

import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { AcaoComponent } from './components/categorias/acao/acao.component';
import { AventuraComponent } from './components/categorias/aventura/aventura.component';
import { FpsComponent } from './components/categorias/fps/fps.component';
import { CorridaComponent } from './components/categorias/corrida/corrida.component';
import { RpgComponent } from './components/categorias/rpg/rpg.component';
import { SimuladorComponent } from './components/categorias/simulador/simulador.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    AcaoComponent,
    AventuraComponent,
    FpsComponent,
    CorridaComponent,
    RpgComponent,
    SimuladorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
