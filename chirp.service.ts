import { Injectable } from '@angular/core';




@Injectable()
export class ChirpService {
    getChirps(): Chirp[] {
        return CHIRPS;
    }
}

