import { AoiStrenzfeld } from '../../shared/aoi';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
//import TileLayer from 'ol/layer/Tile';
// Additional OL
import GeoTIFF from 'ol/source/GeoTIFF';
import TileLayer from 'ol/layer/WebGLTile';



@Component({
  selector: 'app-cog-dms-strenzfeld-style',
  templateUrl: './cog-dms-strenzfeld-style.component.html',
  styleUrls: ['./cog-dms-strenzfeld-style.component.scss']
})
export class CogDmsStrenzfeldStyleComponent implements AfterViewInit {
  @ViewChild('map', { static: false }) map!: ElementRef;
  styleElement: HTMLSelectElement;
  cog: TileLayer;

  styles = {
    'Test 1': {
      color: [
        'interpolate',
        ['linear'],
        // Angabe welches Band betrachtet wird
        ['band', 1],
        // Höhenwerte gefolgt von RGB(A)-Farbwerten
        60,
        [0, 0, 0, 0],
        60,
        [43, 131, 186],
        69.505,
        [171, 221, 164],
        81.67,
        [255, 255, 191],
        93.835,
        [253, 174, 97],
        106,
        [215, 25, 28],
      ],
    },
    'Test 2': {
      color: [
        'interpolate',
        ['linear'],
        // Angabe welches Band betrachtet wird
        ['band', 1],
        // Höhenwerte gefolgt von RGB(A)-Farbwerten
        60,
        [0, 0, 0, 0],
        60,
        [215, 25, 28],
        69.505,
        [253, 174, 97],
        81.67,
        [255, 255, 191],
        93.835,
        [171, 221, 164],
        106,
        [43, 131, 186],
      ],
    }
  }
  onChange() {
    ;
    const style = this.styles[this.styleElement.value];
    this.cog.setStyle(style);
  }

  ngAfterViewInit(): void {
    this.styleElement = document.getElementById("style") as HTMLSelectElement;
        
    this.cog = new TileLayer({
      source: new GeoTIFF({
        normalize: false,
        sources: [
          {
            url: 'https://masterarbeit-cog.s3.eu-central-1.amazonaws.com/cog/dsm_strenzfeld_3857_35cm.tif',
          },
        ],
      }),
      style: this.styles['Test 1'],
    });
    this.cog.getSource().setAttributions(AoiStrenzfeld.attributions);
    const map = new Map({
      layers: [
        new TileLayer({source: new OSM()}),
        this.cog
      ],
      view: new View({
        center: [
          AoiStrenzfeld.extent[0] + ( AoiStrenzfeld.extent[2] - AoiStrenzfeld.extent[0] ) / 2,
          AoiStrenzfeld.extent[1] + ( AoiStrenzfeld.extent[3] - AoiStrenzfeld.extent[1] ) / 2
        ],
        zoom: 12
      }),
      target: this.map.nativeElement
    });
    map.getView().fit(AoiStrenzfeld.extent, { padding: [25, 25, 25, 25] });
  }
}
