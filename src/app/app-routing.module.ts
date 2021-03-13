import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';

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
    path: "Login",
    component: LoginComponent
  },
  {
    path: "Register",
    component: RegisterComponent
  },
  {
    path: "ResetPassword",
    component: ResetPasswordComponent
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
