import { Component, OnInit } from '@angular/core';
import { Game } from '../model/game';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
})
export class LeaderboardComponent  implements OnInit {

  game: Game = new Game;

  constructor(private router: Router,private storage: StorageService) {}

  async ngOnInit() {
    await this.storage.getGame('setup')?.then(res => {
      this.game = res;
      console.log(this.game);
    });
  }

  back(){
    this.router.navigate(['scoring']);
  }

}
