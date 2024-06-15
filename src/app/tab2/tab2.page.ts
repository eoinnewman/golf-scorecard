import { Component } from '@angular/core';
import { StorageService } from '../storage.service';
import { Game } from '../model/game';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  game: Game = new Game;

  constructor(private storage: StorageService) {}

  async ngOnInit() {
    await this.storage.getGame('setup')?.then(res => {
      this.game = res;
      console.log(this.game);
    });
  }

}
