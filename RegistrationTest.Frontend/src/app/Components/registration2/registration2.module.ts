import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterUserStep2Component } from './../register-user-step2/register-user-step2.component';



@NgModule({
  declarations: [
    RegisterUserStep2Component],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: RegisterUserStep2Component },
    ])
  ]
})
export class Registration2Module { }
