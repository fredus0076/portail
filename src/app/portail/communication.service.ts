import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor() { }

  getLog(){
    console.log('sa fonctionne bien !! ')
  }
}
