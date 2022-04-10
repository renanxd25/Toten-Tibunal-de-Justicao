import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HomeComponent } from './paginas/home/home.component';
import { BodyHomeComponent } from './components/body-home/body-home.component';
import { HeaderHomeComponent } from './components/header-home/header-home.component';
import { FooterHomeComponent } from './components/footer-home/footer-home.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HomeComponent,
    BodyHomeComponent,
    HeaderHomeComponent,
    FooterHomeComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  exports: [
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
