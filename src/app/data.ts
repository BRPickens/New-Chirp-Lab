import { Injectable } from '@angular/core';

export interface IChirp {
  id: number;
  name: string;
  user: string;
  message: string;
};

export const CHIRPS: Array<IChirp> = [
  {
    id: 1,
    name: 'Arthur Curry',
    user: 'Orin',
    message: 'Hi, grandma? Can u come pick me up from my rap battle? It\'s over. No, I lost. He saw you dropping me off & did a pretty devastating freestyle about it. I just wanna do something else. Thank you.'
  },
  {
    id: 2,
    name: 'David Haller',
    user: 'Jack Wayne',
    message: ' No. It\'s just Thursday. My 260th Thursday as a passenger on the cruise ship Mental Health.'
  },
  {
    id: 3,
    name: 'Carl Lucas',
    user: 'Luther Cage',
    message: 'Sweet Chritmas!'
  },
  {
    id: 4,
    name: 'Jessica Jones',
    user: 'Jewel',
    message: 'Would you put day drinking under experience or special abilities?'
  },
  {
    id: 5,
    name: 'Sherlock Holmes',
    user: 'Sherlock',
    message: 'It is a capital mistake to theorize before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts.'
  },
  {
    id: 6,
    name: 'John Watson',
    user: 'Dr. Watson',
    message: 'We solve crimes. I blog about it, he forgets his pants. I wouldn\'t hold out to much hope.'
  },
  {
    id: 7,
    name: 'Jim Moriarty',
    user: 'Moriarty',
    message: 'In a world of locked rooms, the man with the key is king. And honey, you should see me in a crown.'
  },
  {
    id: 8,
    name: 'Irene Adler',
    user: 'The Woman',
    message: 'Do you know the big problem with a disguise, Mr Holmes? However hard you try, it is always a self-portrait.'
  }

]

@Injectable()
export class DataService {
    getChirps(): void {}
    
  constructor() { }

}