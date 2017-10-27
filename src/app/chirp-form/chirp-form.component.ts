import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';


export class Chirp {
  user: string;
  message: string;
}


@Component({
  selector: 'app-chirp-form',
  templateUrl: './chirp-form.component.html',
  styleUrls: ['./chirp-form.component.css']
})

export class ChirpFormComponent implements OnInit {
  chirp: Chirp = {
    user: 'Black Knight',
    message: '',
  };

  constructor() {
    // this.user = 'Black Knight';
    // this.chirp = '';
   }

  ngOnInit() {


    }
  sendChirp() {
    // this.route.navigate(['./list/list.component'])
  }
  }

  



// interface IChirp {

// }