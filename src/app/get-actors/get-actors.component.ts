import { Component, OnInit } from '@angular/core';
import { Actor } from '../model/actor.model';
import { ActorServiceService } from '../actor-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-actors',
  templateUrl: './get-actors.component.html',
  styleUrls: ['./get-actors.component.css']
})
export class GetActorsComponent implements OnInit {

  actors: any;

   constructor(private http: HttpClient) { }

  ngOnInit() {
    let response = this.http.get("http://localhost:8080/getActors");
    
      response.subscribe( (data) => {
        this.actors = data;
      });
  }

}
