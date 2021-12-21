import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionDetailsComponent } from './champion-details/champion-details.component';
import { ChampionsComponent } from './champions/champions.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { HomeComponent } from './home/home.component';
import { SearchSummonerComponent } from './search-summoner/search-summoner.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search-summoner', component: SearchSummonerComponent },
  { path: 'documentation', component: DocumentationComponent },
  { path: 'champions', component: ChampionsComponent },
  { path: 'champions/:id', component: ChampionDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
