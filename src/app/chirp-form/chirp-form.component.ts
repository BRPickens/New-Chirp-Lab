import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { IChirp, CHIRPS } from '../data';
import { DataService } from '../services/data.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-chirp-form',
  templateUrl: './chirp-form.component.html',
  styleUrls: ['./chirp-form.component.css']
})
export class ChirpFormComponent implements OnInit {

  constructor(
    private svc: DataService,
    private router: Router) { }

  ngOnInit() {
    }

    randomId(): number {
      return Math.floor(Math.random() * 10000)
    }

  public newChirp(name: string, user: string, message: string): void {
    let id = this.randomId();
    let chirp = {id, name, user, message}
    CHIRPS.unshift(chirp)
    this.router.navigate(['/list'])
  }

}
