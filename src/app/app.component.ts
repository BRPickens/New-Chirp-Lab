import { Component } from '@angular/core';
import { ChirpFormComponent } from './chirp-form/chirp-form.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';

RouterModule.forRoot([
  {
    path: 'chirps',
    component: ListComponent
  }
])

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}