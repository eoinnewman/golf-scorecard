import { Component, OnInit } from '@angular/core';
import { Game } from '../model/game';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-scoring',
  templateUrl: './scoring.component.html',
  styleUrls: ['./scoring.component.scss'],
})
export class ScoringComponent  implements OnInit {

  game: Game = new Game;

  constructor(private router: Router,private storage: StorageService) {}

  async ngOnInit() {
    await this.storage.getGame('setup')?.then(res => {
      this.game = res;
      console.log(this.game);
    });
  }

  incrementScore(id:string){
    this.game.players[this.game.players.findIndex(p => p.id == id)].holeScore[this.game.holeNumber-1]++;
    this.game.players[this.game.players.findIndex(p => p.id == id)].overallScore = this.game.players[this.game.players.findIndex(p => p.id == id)].holeScore.reduce((partialSum: any, a: any) => partialSum + a, 0);
  }

  decrementScore(id:string){
    this.game.players[this.game.players.findIndex(p => p.id == id)].holeScore[this.game.holeNumber-1]--;
    this.game.players[this.game.players.findIndex(p => p.id == id)].overallScore = this.game.players[this.game.players.findIndex(p => p.id == id)].holeScore.reduce((partialSum: any, a: any) => partialSum + a, 0);
  }

  async nextHole(){
    this.game.holeNumber++;
    await this.storage.setGame('setup', this.game)
  }

  async lastHole(){
    this.game.holeNumber--;
    await this.storage.setGame('setup', this.game)
  }

  viewLeaderboard(){
    this.router.navigate(['leaderboard']);
  }

  finishGame(){
    this.router.navigate(['leaderboard']);
  }

  newGame(){
    this.storage.clearGame();
    this.router.navigate(['']);
    
  }

}
