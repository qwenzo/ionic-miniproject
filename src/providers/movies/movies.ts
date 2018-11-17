import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {response} from '../../../src/interfaces/response.interface';

/*
  Generated class for the MoviesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoviesProvider {
  URL:string="https://yts.am/api/v2/list_movies.json?";

  constructor(public http: HttpClient) {
    console.log('Hello MoviesProvider Provider');
  }

  searchMovies(title:string){
   return this.http.get<response>(`${this.URL}query_term=${title}`);
  }



}
