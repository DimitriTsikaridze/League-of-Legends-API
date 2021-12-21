import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ChampionDetails } from '../models/champion-details';
import { ChampionsService } from './champions.service';

@Injectable({
  providedIn: 'root',
})
export class ChampionDetailsService {
  private championDetailsURL =
    'https://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/champion/';

  private champion!: ChampionDetails;

  constructor(
    private http: HttpClient,
    private championsService: ChampionsService
  ) {}

  getSingleChampion(championID: string) {
    return this.http
      .get<ChampionDetails>(`${this.championDetailsURL}${championID}.json`)
      .pipe(
        map((value: any) => {
          this.champion = {
            id: value.data[championID].id,
            key: value.data[championID].key,
            lore: value.data[championID].lore,
            name: value.data[championID].name,
            title: value.data[championID].title,
            imageURL: `${this.championsService.championsURL}splash/${championID}_0.jpg`,
          };
          return this.champion;
        })
      );
  }
}
