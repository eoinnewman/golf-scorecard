import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { Game } from '../model/game';
import { PlayerDetails } from '../model/player-details';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit {

  game: Game = new Game;

  constructor(private router: Router, private storage: StorageService) { }

  ngOnInit() {}

  async startGame(){
    await this.storage.setGame('setup', this.game)?.then(res => {
      this.router.navigate(['add-players']);
    });
  }

}
