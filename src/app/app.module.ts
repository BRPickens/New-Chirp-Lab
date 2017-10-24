import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, MatCardContent, MatToolbarModule, MatMenuModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ChirpFormComponent } from './chirp-form/chirp-form.component';
import { ListComponent } from './list/list.component';
import { SingleComponent } from './single/single.component';

@NgModule({
  declarations: [
    AppComponent,
    ChirpFormComponent,
    ListComponent,
    SingleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

