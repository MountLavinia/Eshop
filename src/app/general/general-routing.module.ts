import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './genaral-components/about/about.component';
import { CartComponent } from './genaral-components/cart/cart.component';
import { ContactComponent } from './genaral-components/contact/contact.component';
import { GalleryComponent } from './genaral-components/gallery/gallery.component';
import { GeneralLandPageComponent } from './genaral-components/general-land-page/general-land-page.component';
import { LoginComponent } from './genaral-components/login/login.component';
import { ResetPasswordComponent } from './genaral-components/reset-password/reset-password.component';
import { ShopItemComponent } from './genaral-components/shop-item/shop-item.component';
import { ShopComponent } from './genaral-components/shop/shop.component';

const routes: Routes = [
  {
    path: "Login",
    component: LoginComponent
  },
  {
    path: "ResetPassword",
    component: ResetPasswordComponent
  },
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
