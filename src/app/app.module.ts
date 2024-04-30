import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoComponent } from './components/logo/logo.component';
import { ButtonIconComponent } from './components/button-icon/button-icon.component';
import { HeroSectionComponent } from './pages/hero-section/hero-section.component';
import { CategoryNavigatorButtonComponent } from './componnets/category-navigator-button/category-navigator-button.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogoComponent,
    ButtonIconComponent,
    HeroSectionComponent,
    CategoryNavigatorButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
