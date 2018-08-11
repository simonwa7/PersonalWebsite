import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutmeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
