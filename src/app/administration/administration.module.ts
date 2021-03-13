import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLandPageComponent } from './admin-land-page/admin-land-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { ReportsComponent } from './reports/reports.component';
import { SalesComponent } from './sales/sales.component';
import { AdministrationRoutingModule } from './administration-routing.module';

@NgModule({
  declarations: [AdminLandPageComponent, DashboardComponent, ProductsComponent, ReportsComponent, SalesComponent],
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
