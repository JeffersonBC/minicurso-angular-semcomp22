import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAreaComponent } from './user-area.component';
import { UserAreaRoutingModule } from './user-area.route.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserAreaRoutingModule,
  ],
  declarations: [UserAreaComponent]
})
export class UserAreaModule { }
