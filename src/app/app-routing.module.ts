import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: "Administration",
    loadChildren: () =>
      import("./administration/administration.module").then(a => a.AdministrationModule),
      canActivate: [AuthGuard]
  },
  {
    path: "Home",
    loadChildren: () =>
      import("./general/general.module").then(g => g.GeneralModule)
  },
  {
    path: "",
    redirectTo: "Home",
    pathMatch: "full"
  },
  { path: "**", redirectTo: "Home",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
