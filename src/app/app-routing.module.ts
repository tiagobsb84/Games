import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcaoComponent } from './components/categorias/acao/acao.component';
import { SectionComponent } from './components/section/section.component';

const routes: Routes = [
  {
    path: '',
    component: SectionComponent
  },
  {
    path: 'acao',
    component: AcaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
