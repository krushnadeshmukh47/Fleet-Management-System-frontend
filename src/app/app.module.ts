import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AboutComponent } from './components/about/about.component';
import { SeatsComponent } from './components/seats/seats.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PaymentComponent } from './components/payment/payment.component';
import { TicketComponent } from './components/ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LoginComponent,
    RegistrationComponent,
    LandingComponent,
    AboutComponent,
    SeatsComponent,
    UserProfileComponent,
    PaymentComponent,
    TicketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
