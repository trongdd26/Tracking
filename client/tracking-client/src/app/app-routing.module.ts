import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarComponent }   from './component/car/car.component';

const routes: Routes = [ 
	{ path: '', redirectTo: '/car', pathMatch: 'full' },
	{ path: 'car', component: CarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
