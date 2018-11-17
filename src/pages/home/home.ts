import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {movieCard} from '../../../src/interfaces/movieCard.interface';
import {response} from '../../../src/interfaces/response.interface';
import {MoviesProvider} from '../../providers/movies/movies';
import {MovieDetailsPage} from '../movie-details/movie-details'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items:movieCard[]
  searchTerm:string

  constructor(public navCtrl: NavController, private moviesProvider:MoviesProvider) {
    this.items=[];
   
  }

  itemSelected(item:movieCard){
    this.navCtrl.push(MovieDetailsPage,item
    )
  }

  onInput(event){
    this.search(this.searchTerm);
  }

  search(term:string){
   this.moviesProvider.searchMovies(term).subscribe(
     (res:response)=>{
       console.log(res.data);
      this.items=res.data.movies;
     }
   )
  }

}
