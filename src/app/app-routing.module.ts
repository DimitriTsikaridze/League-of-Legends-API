import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionsComponent } from './champions/champions.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'find-summoner', component: MainComponent },
  { path: 'documentation', component: DocumentationComponent },
  { path: 'champions', component: ChampionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
