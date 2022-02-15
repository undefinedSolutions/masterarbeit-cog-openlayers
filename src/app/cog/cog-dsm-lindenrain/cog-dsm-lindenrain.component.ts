import { AoiLindenrain } from '../../shared/aoi';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
//import TileLayer from 'ol/layer/Tile';
// Additional OL
import GeoTIFF from 'ol/source/GeoTIFF';
import TileLayer from 'ol/layer/WebGLTile';



@Component({
  selector: 'app-cog-dsm-lindenrain',
  templateUrl: './cog-dsm-lindenrain.component.html',
  styleUrls: ['./cog-dsm-lindenrain.component.scss']
})
export class CogDsmLindenrainComponent implements AfterViewInit {
  @ViewChild('map', { static: false }) map!: ElementRef;

  ngAfterViewInit(): void {
    const sourceCOG = new GeoTIFF({
      normalize: false,
      sources: [
        {
          url: 'https://data.masterarbeit-cog.de/cog/dsm_lindenrain.tif',
        },
      ],
    });
    sourceCOG.setAttributions(AoiLindenrain.attributions);
    console.log(sourceCOG.getRevision())
    const layer = new TileLayer({
      source: sourceCOG,
      style: {
        color: [
          'interpolate',
          ['linear'],
          ['band', 1],
          // Colors
          600.96,
          [0, 0, 0, 0],
          600.97,
          [43, 131, 186],
          616.34,
          [171, 221, 164],
          631.71,
          [255, 255, 191],
          647.08,
          [253, 174, 97],
          662.45,
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
          AoiLindenrain.extent[0] + ( AoiLindenrain.extent[2] - AoiLindenrain.extent[0] ) / 2,
          AoiLindenrain.extent[1] + ( AoiLindenrain.extent[3] - AoiLindenrain.extent[1] ) / 2
        ],
        zoom: 12
      }),
      target: this.map.nativeElement
    });
    map.getView().fit(AoiLindenrain.extent, { padding: [25, 25, 25, 25] });
  }
}
