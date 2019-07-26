import { Component, OnInit, Inject } from '@angular/core';
import { Location } from 'src/app/shared/model/location.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import '../../../../../../node_modules/leaflet-routing-machine'


declare let L;


@Component({
  selector: 'app-event-localization-dialog',
  templateUrl: './event-localization-dialog.component.html',
  styleUrls: ['./event-localization-dialog.component.css']
})
export class EventLocalizationDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EventLocalizationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Location) { }

  ngOnInit() {
    this.initMap();
  }
  initMap() {
    let lat = this.data.lat;
    let lng = this.data.lon;
    const token = 'pk.eyJ1IjoiZ2Vib3Jza2ltYXRldXN6IiwiYSI6ImNqeHczNm9pczAxbXMzaXBocmUyb283MnMifQ.rcjf0gfMH7XLOjy0HsStpg';

    let map = L.map('map').setView([lat, lng], 13);

    L.tileLayer(`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${token}`, {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 20,
      id: 'mapbox.streets',
      accessToken: token
    }).addTo(map);

    let marker = L.marker([lat, lng]).addTo(map);
    marker.bindPopup(`<b>${this.data.address}</b>`).openPopup();
  }

}
