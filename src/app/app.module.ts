import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TipCalculatorComponent } from './tip-calculator/tip-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CalculatorComponent,
    TipCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
