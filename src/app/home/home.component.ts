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
  player: Player;
  constructor (private playerService: PlayerService) {
  }


  submitForm(name: string, characteristics: string){
    const characteristicsArray: string[] = characteristics.split(', ');
    let newPlayer = new Player(name, characteristicsArray);
    this.playerService.addPlayer(newPlayer);
  }

}

