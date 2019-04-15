import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { HomeChildComponent } from "./home/home-child/home-child.component";

const routes: Routes = [
  {
    path: "", vcomponent: AppComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "home/home-child", component: HomeChildComponent },

      { path: "login", loadChildren: './login/login.module#LoginModule' },
      { path: "user-area", loadChildren: './user-area/user-area.module#UserAreaModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
