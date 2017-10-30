import { Injectable } from '@angular/core';
import { IChirp, CHIRPS } from '../data';

@Injectable()
export class DataService {
    chirps: Array<IChirp> = [];

    getChirps(): Promise<IChirp[]> {
        return Promise.resolve(CHIRPS);
    }

    getChirp(id: number): Promise<IChirp> {
        return this.getChirps()
            .then((chirps) => {
                return chirps.find(chirp => chirp.id === id);
            })
            .then((chirp) => {
                return chirp;
            })
        }
    }

