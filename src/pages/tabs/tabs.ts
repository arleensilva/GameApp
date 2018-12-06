import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { GamesPage } from '../games/games';
import { MyGamesPage } from '../my-games/my-games';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = GamesPage;
  tab3Root = MyGamesPage;
  tab4Root = AboutPage;

  constructor() {

  }
}
