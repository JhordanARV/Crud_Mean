import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioAutosComponent } from './inicio-autos/inicio-autos.component';
import { ListarAutosComponent } from './listar-autos/listar-autos.component';
import { CrearAutosComponent } from './crear-autos/crear-autos.component';
import { ActualizarAutosComponent } from './actualizar-autos/actualizar-autos.component';

const routes: Routes = [
  {
    path:"",
    component: InicioAutosComponent
  },
  {
    path:"crear",
    component: CrearAutosComponent,
    pathMatch: 'full'
  },
  {
    path: "listar",
    component: ListarAutosComponent
  },
  {
    path: "actualizar/:id",
    component: ActualizarAutosComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
