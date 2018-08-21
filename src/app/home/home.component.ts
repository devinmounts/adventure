import { Component } from '@angular/core';
import { Player } from '../models/player.model';
import { PlayerService } from '../player.service';

 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PlayerService]
})


export class HomeComponent {

  constructor (private playerService: PlayerService) {}

  // player: Player;

  submitForm(name: string, characteristics: string){
    const characteristicsArray: string[] = characteristics.split(', ');
    let newPlayer = new Player(name, characteristicsArray);
    this.playerService.addPlayer(newPlayer);
    // this.player = newPlayer
  }

}

export const PLAYER: Player = HomeComponent.player
