import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenaralRoutingModule } from './general-routing.module';
import { GeneralLandPageComponent } from './genaral-components/general-land-page/general-land-page.component';
import { GalleryComponent } from './genaral-components/gallery/gallery.component';
import { ShopComponent } from './genaral-components/shop/shop.component';
import { ShopItemComponent } from './genaral-components/shop-item/shop-item.component';
import { AboutComponent } from './genaral-components/about/about.component';
import { ContactComponent } from './genaral-components/contact/contact.component';
import { ResetPasswordComponent } from './genaral-components/reset-password/reset-password.component';
import { LoginComponent } from './genaral-components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [GeneralLandPageComponent, GalleryComponent, ShopComponent, ShopItemComponent, AboutComponent, ContactComponent, LoginComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    GenaralRoutingModule,
    ReactiveFormsModule
  ]
})
export class GeneralModule { } 
