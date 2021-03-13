import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLandPageComponent } from './administration-components/admin-land-page/admin-land-page.component';
import { DashboardComponent } from './administration-components/dashboard/dashboard.component';
import { ProductsComponent } from './administration-components/products/products.component';
import { SalesComponent } from './administration-components/sales/sales.component';
import { ReportsComponent } from './administration-components/reports/reports.component';
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
