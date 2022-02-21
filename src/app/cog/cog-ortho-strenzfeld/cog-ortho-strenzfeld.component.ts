import { AoiStrenzfeld, getExtent } from './../../shared/aoi';
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
  selector: 'app-cog-ortho-strenzfeld',
  templateUrl: './cog-ortho-strenzfeld.component.html',
  styleUrls: ['./cog-ortho-strenzfeld.component.scss']
})
export class CogOrthoStrenzfeldComponent implements AfterViewInit {
  @ViewChild('map', { static: false }) map!: ElementRef;
  z: number;

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe((params) => {
      this.z = Number(params.get('z'));
    })
  }

  ngAfterViewInit(): void {
    const cog = new TileLayer({
      extent: AoiStrenzfeld.extent.i0,
      source: new GeoTIFF({
        sources: [
          {
            url: 'https://data.masterarbeit-cog.de/cog/ortho_strenzfeld.tif'
          },
        ],
      })
    })
    cog.getSource().setAttributions(AoiStrenzfeld.attributions);
    const map = new Map({
      layers: [
        new TileLayer({source: new OSM()}),
        cog
      ],
      view: new View({
        center: [
          AoiStrenzfeld.extent.i0[0] + ( AoiStrenzfeld.extent.i0[2] - AoiStrenzfeld.extent.i0[0] ) / 2,
          AoiStrenzfeld.extent.i0[1] + ( AoiStrenzfeld.extent.i0[3] - AoiStrenzfeld.extent.i0[1] ) / 2
        ],
        zoom: 0
      }),
      target: this.map.nativeElement
    });
    getExtent(map, this.z, AoiStrenzfeld.ortho.max, AoiStrenzfeld);
  }
}
