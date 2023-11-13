import { authGuard } from './../auth/guards/auth.guard';
import { StatistiqueComponent } from './components/statistique/statistique.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'statistique', component: StatistiqueComponent, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
