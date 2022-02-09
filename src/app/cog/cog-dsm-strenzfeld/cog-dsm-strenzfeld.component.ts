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
  selector: 'app-cog-dsm-strenzfeld',
  templateUrl: './cog-dsm-strenzfeld.component.html',
  styleUrls: ['./cog-dsm-strenzfeld.component.scss']
})
export class CogDsmStrenzfeldComponent implements AfterViewInit {
  @ViewChild('map', { static: false }) map!: ElementRef;

  ngAfterViewInit(): void {
    const sourceCOG = new GeoTIFF({
      normalize: false,
      sources: [
        {
          url: 'https://masterarbeit-cog.s3.eu-central-1.amazonaws.com/cog/dsm_strenzfeld_3857_35cm.tif',
        },
      ],
    });
    console.log(sourceCOG.getRevision())
    const layer = new TileLayer({
      source: sourceCOG,
      style: {
        color: [
          'interpolate',
          ['linear'],
          ['band', 1],
          // Colors
          0,
          [0, 0, 0, 0],
          57.34,
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
    });
    const map = new Map({
      layers: [
        new TileLayer({source: new OSM()}),
        layer
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
