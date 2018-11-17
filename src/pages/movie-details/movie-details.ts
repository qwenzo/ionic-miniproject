import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {movieCard} from '../../../src/interfaces/movieCard.interface';

/**
 * Generated class for the MovieDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
})
export class MovieDetailsPage {
  item:movieCard;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item=this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailsPage');
  }

}
