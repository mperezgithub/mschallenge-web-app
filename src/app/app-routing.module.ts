import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientAddComponent } from './client-add/client-add.component';
import { ClientStatsComponent } from './client-stats/client-stats.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'clients', component: ClientListComponent },
  { path: 'add', component: ClientAddComponent },
  { path: 'stats', component: ClientStatsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }