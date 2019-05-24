import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarDirective } from './navbar/navbar.directive';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DheaderComponent } from './dheader/dheader.component';
import { LoyaltyComponent } from './loyalty/loyalty.component';
import { ProductComponent } from './product/product.component';
import { GiftcardComponent } from './giftcard/giftcard.component';
import { LoyaltypointsComponent } from './loyalty/loyaltypoints/loyaltypoints.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DheaderComponent,
    NavbarComponent,
    NavbarDirective,
    LoyaltyComponent,
    ProductComponent,
    GiftcardComponent,
    LoyaltypointsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
