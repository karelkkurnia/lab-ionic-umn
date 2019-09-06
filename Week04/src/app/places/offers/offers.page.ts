import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  constructor(private placesService: PlacesService) { }
  // bisa kasih -> ,private menuCtrl: MenuController

  loadedPlaces: Place[];
  ngOnInit() {
    this.loadedPlaces = this.placesService.getAllPlaces();
  }
  // onOpenMenu(){
  //   this.menuCtrl.toggle('m1');
  // }
}
