import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-chirp-form',
  templateUrl: './chirp-form.component.html',
  styleUrls: ['./chirp-form.component.css']
})
export class ChirpFormComponent implements OnInit {
  user: 'Black Joker';

  constructor() { }

  ngOnInit() {


    }
  sendChirp() {
    // this.route.navigate(['/list'])
  }
  }



