import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actor } from './model/actor.model';

@Injectable({
  providedIn: 'root'
})
export class ActorServiceService {

  constructor() { } //private http: HttpClient
 // baseUrl: string = 'http://localhost:8080/getActors';

  //getActors() {
    //return this.http.get<Actor[]>(this.baseUrl);
  //}
}
