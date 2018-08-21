import { Injectable } from '@angular/core';
import { Scenario } from './models/scenario.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ScenariosService {
  scenarios: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.scenarios = database.list('scenarios');
   }

   getScenarios(){
     return this.scenarios;
   }

   getScenariosByTitle(title: string){
     return this.database.object('scenarios/' + title)
   }

}
