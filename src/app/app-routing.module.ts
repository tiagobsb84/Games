import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcaoComponent } from './components/categorias/acao/acao.component';
import { AventuraComponent } from './components/categorias/aventura/aventura.component';
import { CorridaComponent } from './components/categorias/corrida/corrida.component';
import { EsportesComponent } from './components/categorias/esportes/esportes.component';
import { EstrategiaComponent } from './components/categorias/estrategia/estrategia.component';
import { FpsComponent } from './components/categorias/fps/fps.component';
import { RpgComponent } from './components/categorias/rpg/rpg.component';
import { SimuladorComponent } from './components/categorias/simulador/simulador.component';
import { SectionComponent } from './components/section/section.component';

const routes: Routes = [
  {
    path: '',
    component: SectionComponent
  },
  {
    path: 'acao',
    component: AcaoComponent
  },
  {
    path: 'aventura',
    component: AventuraComponent
  },
  {
    path: 'fps',
    component: FpsComponent
  },
  {
    path: 'corrida',
    component: CorridaComponent
  },
  {
    path: 'rpg',
    component: RpgComponent
  },
  {
    path: 'simulador',
    component: SimuladorComponent
  },
  {
    path: 'esportes',
    component: EsportesComponent
  },
  {
    path: 'estrategia',
    component: EstrategiaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
