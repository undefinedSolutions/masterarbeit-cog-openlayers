import { AoiStrenzfeld, getExtent } from '../../shared/aoi';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  z: number;

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe((params) => {
      this.z = Number(params.get('z'));
    })
  }

  ngAfterViewInit(): void {
    const sourceCOG = new GeoTIFF({
      normalize: false,
      sources: [
        {
          url: 'https://data.masterarbeit-cog.de/cog/dsm_strenzfeld.tif',
        },
      ],
    });
    sourceCOG.setAttributions(AoiStrenzfeld.attributions);
    const layer = new TileLayer({
      source: sourceCOG,
      style: {
        color: [
          'interpolate',
          ['linear'],
          ['band', 1],
          // Colors
          57,
          [0, 0, 0, 0],
          57,
          [44, 129, 184],
          70.75,
          [171, 223, 167],
          84.5,
          [255, 255, 195],
          98.25,
          [253, 178, 103],
          112,
          [215, 16 ,29],
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
          AoiStrenzfeld.extent.i0[0] + ( AoiStrenzfeld.extent.i0[2] - AoiStrenzfeld.extent.i0[0] ) / 2,
          AoiStrenzfeld.extent.i0[1] + ( AoiStrenzfeld.extent.i0[3] - AoiStrenzfeld.extent.i0[1] ) / 2
        ],
        zoom: 12
      }),
      target: this.map.nativeElement
    });
    getExtent(map, this.z, AoiStrenzfeld.dsm.max, AoiStrenzfeld);
  }
}
