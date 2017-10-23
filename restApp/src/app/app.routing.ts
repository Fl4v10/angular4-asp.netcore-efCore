import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { RestauranteListComponent } from './restaurante/restaurante-list/restaurante-list.component';
import { PratoComponent } from './prato/prato.component';
import { PratoListComponent } from './prato/prato-list/prato-list.component';

const APP_ROUTERS: Routes = [
    { path: '', component: HomeComponent },
    { path: 'restaurante', component: RestauranteListComponent },
    { path: 'prato', component: PratoListComponent },
    { path: 'restaurante/novo', component: RestauranteComponent },
    { path: 'prato/novo', component: PratoComponent },
    { path: 'restaurante/:id', component: RestauranteComponent },
    { path: 'prato/:id', component: PratoComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTERS);