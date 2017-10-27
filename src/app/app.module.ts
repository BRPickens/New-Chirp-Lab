import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, MatCardContent, MatToolbarModule, MatMenuModule } from '@angular/material';
import { AppComponent } from './app.component';
import { ChirpFormComponent } from './chirp-form/chirp-form.component';
import { ListComponent } from './list/list.component';
import { SingleComponent } from './single/single.component';
import { DataService } from './services/data.service';
import { RouterModule, Routes } from '@angular/router';
import { FormControl } from '@angular/forms';

const appRoutes: Routes = [
  {path: 'chirp-form', component: ChirpFormComponent},
  {path: 'list', component: ListComponent},
  {path: 'single', component: SingleComponent}
]

RouterModule.forRoot([
  {
    path:''
  }
])

@NgModule({
  declarations: [
    AppComponent,
    ChirpFormComponent,
    ListComponent,
    SingleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

