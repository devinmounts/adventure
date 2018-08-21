import { Component } from '@angular/core';
import { Player } from '../models/player.model';

 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

 submitForm(name: string, characteristics: string){
   const characteristicsArray: string[] = characteristics.split(', ');
   let newPlayer = new Player(name, characteristicsArray);
   console.log(newPlayer);
 }

}
