import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AboutComponent } from './components/about/about.component';
import { SeatsComponent } from './components/seats/seats.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  {path: 'search', component: SearchComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegistrationComponent},
  {path: 'landing', component: LandingComponent},
  {path:'about', component: AboutComponent},
  {path:'seats/:busId', component: SeatsComponent},
  {path:'user-profile', component: UserProfileComponent},
  { path: 'payment', component: PaymentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
