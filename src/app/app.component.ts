import { AfterViewInit, Component } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const mapElement = document.querySelectorAll('#map')[0] as HTMLElement;
    new Map({
      layers: [
        new TileLayer({source: new OSM()})
      ],
      view: new View({
        center: [0, 0],
        zoom: 2
      }),
      target: mapElement
    });
  }
}
