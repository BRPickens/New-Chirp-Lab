import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IChirp, CHIRPS } from '../data';
import { NgFor } from '@angular/common';
import { DataService } from '../services/data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})



export class ListComponent {
  chirps: IChirp[];

  constructor(
    private dataService: DataService, 
  ) { }



  getChirps(): void {
    this.dataService.getChirps()
      .then(chirps => this.chirps = chirps
  )}

  ngOnInit(): void {
    this.getChirps();
    }
}