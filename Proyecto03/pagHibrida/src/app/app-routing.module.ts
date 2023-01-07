import { PortadaComponent } from './components/portada/portada.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CharactersComponent } from './components/characters/characters.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "characters", component: CharactersComponent },
  {path: "navigation", component: NavigationComponent},
  {path: "portada", component: PortadaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
