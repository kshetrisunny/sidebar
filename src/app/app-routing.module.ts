import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { DheaderComponent } from './dheader/dheader.component';
import { LoyaltyComponent } from './loyalty/loyalty.component';
import { GiftcardComponent } from './giftcard/giftcard.component';
import { LoyaltypointsComponent } from './loyalty/loyaltypoints/loyaltypoints.component';

const routes: Routes = [
  // { path: '', component: NavbarComponent},
  // { path: '', component: LoyaltyComponent,
  //   children: [
  //   ]
  // },
  {path: '', component: LoyaltypointsComponent},
  // { path: '', component: GiftcardComponent},

  

  {path: '**', component: NavbarComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
