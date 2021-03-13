import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLandPageComponent } from './administration-components/admin-land-page/admin-land-page.component';
import { AdministrationRoutingModule } from './administration-routing.module';
import { DashboardComponent } from './administration-components/dashboard/dashboard.component';
import { ProductsComponent } from './administration-components/products/products.component';
import { ReportsComponent } from './administration-components/reports/reports.component';
import { SalesComponent } from './administration-components/sales/sales.component';

@NgModule({
  declarations: [AdminLandPageComponent, DashboardComponent, ProductsComponent, ReportsComponent, SalesComponent],
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
