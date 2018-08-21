import { Injectable } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Player } from './models/player.model';

@Injectable()
export class PlayerService {
  player: Player;

  constructor() { }

  getPlayer() {
    return this.player;
  }

  addPlayer(newPlayer: Player) {
    this.player = newPlayer;
  }

}
