import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"list", component: ReservationListComponent},
  {path:"new", component: ReservationFormComponent},
  {path:"edit/:id", component: ReservationFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
