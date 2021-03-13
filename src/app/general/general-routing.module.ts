import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GeneralLandPageComponent } from './general-land-page/general-land-page.component';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {
    path: "",
    component: GeneralLandPageComponent,
    children: [
      {
        path: "Gallery",
        component: GalleryComponent
      },
      {
        path: "Shop",
        component: ShopComponent
      },
      {
        path: "ShopItem",
        component: ShopItemComponent
      },
      {
        path: "Cart",
        component: CartComponent
      },
      {
        path: "About",
        component: AboutComponent
      },
      {
        path: "Contact",
        component: ContactComponent
      },
      {
        path: "",
        redirectTo: "Gallery",
        pathMatch: "full"
      },
      {
        path: "**", redirectTo: "Gallery",
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenaralRoutingModule { }
