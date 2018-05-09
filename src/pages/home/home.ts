import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent } from '@ionic-native/google-maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  map: GoogleMap;
 
  constructor(public navCtrl: NavController) {
    
  }
 
  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

    // Create a map after the view is ready and the native platform is ready.
    this.map = GoogleMaps.create('map_canvas');

    // Wait the maps plugin is ready until the MAP_READY event
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {


      console.log('map is ready to use.');


    });

  }

}
