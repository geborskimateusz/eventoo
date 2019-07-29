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
  styleUrls: ['./event-localization-dialog.component.scss']
})
export class EventLocalizationDialogComponent implements OnInit {

  options: {};
  summit: {};

  constructor(public dialogRef: MatDialogRef<EventLocalizationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.initMap();
  }



  private initMap() {
    this.summit = marker([+this.data.location.lat, +this.data.location.lon], {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'leaflet/marker-icon.png',
        shadowUrl: 'leaflet/marker-shadow.png'
      })
    }).bindPopup(`<b> <a href="http://maps.google.co.uk/maps?q=${this.data.location.lat},${this.data.location.lon}">${this.data.location.address}</a></b>`);

    this.options = {
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }),
        this.summit
      ],
      zoom: 15,
      center: latLng([+this.data.location.lat, +this.data.location.lon])
    };
  }
}
