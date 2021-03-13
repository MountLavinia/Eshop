import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLandPageComponent } from './admin-land-page/admin-land-page.component';
import { CartComponent } from '../general/cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { ReportsComponent } from './reports/reports.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
  {
    path: "",
    component: AdminLandPageComponent,
    children: [
      {
        path: "Dashboard",
        component: DashboardComponent
      },
      {
        path: "Products",
        component: ProductsComponent
      },
      {
        path: "Sales",
        component: SalesComponent
      },
      {
        path: "Reports",
        component: ReportsComponent
      },
      {
        path: "",
        redirectTo: "Dashboard",
        pathMatch: "full"
      },
      {
        path: "**", redirectTo: "Dashboard",
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
