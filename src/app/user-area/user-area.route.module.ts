import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAreaComponent } from './user-area.component';


const routes: Routes = [
  { path: '', component: UserAreaComponent },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAreaRoutingModule { }
