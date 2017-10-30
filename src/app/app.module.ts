import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgModule, Injectable, Directive, ElementRef } from '@angular/core';
import { NgForOf } from '@angular/common';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SingleComponent } from './single/single.component';
import { ChirpFormComponent } from './chirp-form/chirp-form.component';
import { LoginFormComponent } from './login-form/login-form.component';

import { IChirp, CHIRPS } from './data';
import { DataService } from './services/data.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '', 
    component: LoginFormComponent
  },
  {
    path: 'chirp-form', 
    component: ChirpFormComponent
  }, 
  {
    path: 'list', 
    component: ListComponent
  },
  {
    path: 'single/:id', 
    component: SingleComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SingleComponent,
    ChirpFormComponent,
    LoginFormComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule, 
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [DataService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }

