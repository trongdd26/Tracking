import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './entities/car/car.component';
import { AppHeaderComponent } from './layout/header/app-header/app-header.component';
import { AppAsideComponent } from './layout/nav/app-aside/app-aside.component';
import { AppFooterComponent } from './layout/footer/app-footer/app-footer.component';
import { TrackingComponent } from './layout/main/tracking/tracking.component';
import { HistoryComponent } from './layout/main/history/history.component';
import { ManagerComponent } from './layout/main/manager/manager.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    AppHeaderComponent,
    AppAsideComponent,
    AppFooterComponent,
    TrackingComponent,
    HistoryComponent,
    ManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA5ZKYMYEYDlfioHfi6IIxcykUxcOgSfts'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
