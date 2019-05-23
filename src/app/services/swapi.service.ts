import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/Rx';



@Injectable()
export class SwapiService {
  pending: boolean;
  constructor(private http: HttpClient) {}  


  getPeople() {
      return this.http.get(`https://swapi.co/api/people`);
  }
}
