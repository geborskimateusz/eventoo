import { Component, OnInit, Inject } from '@angular/core';
import { Location } from 'src/app/shared/model/location.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { icon, latLng, marker, polyline, tileLayer, popup } from 'leaflet';

export interface DialogData {
  location: Location
}

@Component({
  selector: 'app-event-localization-dialog',
  templateUrl: './event-localization-dialog.component.html',
  styleUrls: ['./event-localization-dialog.component.css']
})
export class EventLocalizationDialogComponent implements OnInit {

  options = {
    // layers: [
    //   tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     attribution: '&copy; OpenStreetMap contributors'
    //   })
    // ],
    // zoom: 7,
    // center: latLng([ 46.879966, -121.726909 ])
  };

  summit = {

  }

  constructor(public dialogRef: MatDialogRef<EventLocalizationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.summit = marker([+this.data.location.lat, +this.data.location.lon], {
      icon: icon({
        iconSize: [ 25, 41 ],
        iconAnchor: [ 13, 41 ],
        iconUrl: 'leaflet/marker-icon.png',
        shadowUrl: 'leaflet/marker-shadow.png'
      })
    }).bindPopup(`<b>${this.data.location.address}</b>`);

    this.options = {
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }) 
        ,this.summit
      ],
      zoom: 15,
      center: latLng([+this.data.location.lat, +this.data.location.lon])
    };    

 

    // const token = 'pk.eyJ1IjoiZ2Vib3Jza2ltYXRldXN6IiwiYSI6ImNqeHczNm9pczAxbXMzaXBocmUyb283MnMifQ.rcjf0gfMH7XLOjy0HsStpg';

    // this.options = {
    //   layers: [
    //     tileLayer(`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${token}`, {
    //       attribution: '&copy; OpenStreetMap contributors'
    //     })
    //   ],
    //   zoom: 13,
    //   center: latLng([ +this.data.location.lat, +this.data.location.lon ]),
    //   accessToken: token,
    //   id: 'mapbox.streets',
    // };
  }
  initMap() {
    // let lat = this.data.lat;
    // let lng = this.data.lon;
    // const token = 'pk.eyJ1IjoiZ2Vib3Jza2ltYXRldXN6IiwiYSI6ImNqeHczNm9pczAxbXMzaXBocmUyb283MnMifQ.rcjf0gfMH7XLOjy0HsStpg';

    // let map = L.map('map').setView([lat, lng], 13);

    // L.tileLayer(`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${token}`, {
    //   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //   maxZoom: 20,
    //   id: 'mapbox.streets',
    //   accessToken: token
    // }).addTo(map);

    // let marker = L.marker([lat, lng]).addTo(map);
    // marker.bindPopup(`<b>${this.data.address}</b>`).openPopup();
  }

}
