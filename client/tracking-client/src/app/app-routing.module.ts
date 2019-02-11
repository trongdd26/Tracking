import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackingComponent } from './layout/main/tracking/tracking.component';
import { HistoryComponent} from './layout/main/history/history.component';
import { ManagerComponent } from './layout/main/manager/manager.component';

const routes: Routes = [ 
	{ path: '', redirectTo: '/tracking', pathMatch: 'full' },
  { path: 'tracking', component: TrackingComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'manager', component: ManagerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
