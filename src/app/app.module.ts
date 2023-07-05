import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CompaniesComponent } from './pages/companies/companies.component';
import { PersonsComponent } from './pages/persons/persons.component';
import { TopToolbarComponent } from './components/top-toolbar/top-toolbar.component';
import { BottomToolbarComponent } from './components/bottom-toolbar/bottom-toolbar.component';

@NgModule({
    declarations: [AppComponent, LoginComponent, RegisterComponent, CompaniesComponent, PersonsComponent, TopToolbarComponent, BottomToolbarComponent],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
