import { Injectable } from '@angular/core';
import { Scenario } from './models/scenario.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ScenariosService {
  scenarios: FirebaseListObservable<any[]>;
  // tempScenario: Scenario
  constructor(private database: AngularFireDatabase) {
    this.scenarios = database.list('scenarios');
   }

   getScenarios(){
     return this.scenarios;
   }

   getScenarioById(scenarioId: number){
     return this.database.object('scenarios/' + scenarioId)
   }

   getScenarioByTitle(scenarioTitle: string) {
    //  console.log(scenarioTitle);
     return this.database.object('scenarios/' + scenarioTitle)
   }

   getIdByTitle(scenarioTitle: string) {
     let tempScenario = this.database.object('scenarios/' + scenarioTitle)
    //  return this.database.object('scenarios/:id/0')
    // console.log(tempScenario)
    console.log((tempScenario | async)?.id)
  }

    // getObjectByTitle(choice)

}
