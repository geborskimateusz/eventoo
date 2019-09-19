import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { OnIdentifyEffects } from '@ngrx/effects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'eventoo';

  constructor(private swUpdate: SwUpdate) { }

  ngOnInit() {
    this.onServiceWorkerUpdate();
  }

  onServiceWorkerUpdate() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm('New Version abilable, Would you like to load it?')) {
          window.location.reload();
        }
      })
    }
  }
}
