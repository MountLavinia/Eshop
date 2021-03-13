import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralLandPageComponent } from './general-land-page/general-land-page.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ShopComponent } from './shop/shop.component';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GenaralRoutingModule } from './general-routing.module';

@NgModule({
  declarations: [GeneralLandPageComponent, GalleryComponent, ShopComponent, ShopItemComponent, AboutComponent, ContactComponent],
  imports: [
    CommonModule,
    GenaralRoutingModule
  ]
})
export class GeneralModule { }
