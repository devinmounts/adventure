import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ChoicesComponent } from './choices/choices.component';
import { CurrentComponent } from './current/current.component';
import { HomeComponent } from './home/home.component';
import { ScenarioComponent } from './scenario/scenario.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'scenarios/:id',
        component: ScenarioComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);