import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackingComponent }   from './layout/main/tracking/tracking.component';

const routes: Routes = [ 
	{ path: '', redirectTo: '/tracking', pathMatch: 'full' },
	{ path: 'tracking', component: TrackingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
