import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IChirp, CHIRPS } from '../data';
import { DataService } from '../services/data.service';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap'


@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  chirp: IChirp;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.dataService.getChirp(+params.get('id')))
      .subscribe(chirp => this.chirp = chirp)
  }
}