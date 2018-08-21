import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css'],
  providers: [PlayerService]
})
export class PlayerDetailsComponent implements OnInit {
  player: Player;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.player = this.playerService.getPlayer();
    console.log(this.player);
  }

}
