import { Component, OnInit, Pipe } from '@angular/core';
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

  totalFront(holeScores: any){
    let total = 0
    for(let i=0; i<9; i++){
      total = total + holeScores[i];
    }
    return total;
  }

  totalBack(holeScores: any){
    let total = 0
    for(let i=8; i<18; i++){
      total = total + holeScores[i];
    }
    return total;
  }

  newGame(){
    this.storage.clearGame();
    this.router.navigate(['']);
    
  }

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'Yes',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  setResult(ev: any) {
    if(ev.detail.role === 'confirm'){
      this.newGame()
    }
  }

}
