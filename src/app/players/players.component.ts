import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { Game } from '../model/game';
import { PlayerDetails } from '../model/player-details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent  implements OnInit {

  game: Game = new Game;
  playerList : PlayerDetails[] = [];
  playerName : any;

  constructor(private router: Router,private storage: StorageService) { }

  async ngOnInit() {
    await this.storage.getGame('setup')?.then(res => {
      this.game = res;
      console.log(this.game);
    });
  }

  addPlayer() {
    console.log(this.playerName)
    let playerDetails = new PlayerDetails;
    playerDetails.name = this.playerName;
    playerDetails.overallScore = 0;
    playerDetails.holeScore = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    playerDetails.id = Math.random().toString(16).slice(2)
    this.playerList.push(playerDetails);
    this.playerName = null
  }

  deletePlayer(id:string) {
    var index = this.playerList.findIndex(p => p.id == id);
    this.playerList.splice(index,1);
  }

  async confirm (){
    this.game.players = this.playerList;
    this.game.holeNumber = 1;
    await this.storage.setGame('setup', this.game)?.then(res => {
      this.router.navigate(['scoring']);
    })
  }

  async clear () {
    await this.storage.clearGame();
  }

}
