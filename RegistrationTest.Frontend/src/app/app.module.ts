import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', loadChildren: () => import('./Components/registration/registration.module').then(m => m.RegistrationModule) },
      { path: 'register', loadChildren: () => import('./Components/registration/registration.module').then(m => m.RegistrationModule) },
      { path: 'register-step2', loadChildren: () => import('./Components/registration2/registration2.module').then(m => m.Registration2Module) }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
