import { AoiLindenrain, getExtent } from './../../shared/aoi';
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
  selector: 'app-cog-ortho-lindenrain',
  templateUrl: './cog-ortho-lindenrain.component.html',
  styleUrls: ['./cog-ortho-lindenrain.component.scss']
})
export class CogOrthoLindenrainComponent implements AfterViewInit {
  @ViewChild('map', { static: false }) map!: ElementRef;
  z: number;

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe((params) => {
      this.z = Number(params.get('z'));
    })
  }

  ngAfterViewInit(): void {
    const cog = new TileLayer({
      extent: AoiLindenrain.extent.i0,
      source: new GeoTIFF({
        sources: [
          {
            url: 'https://data.masterarbeit-cog.de/cog/ortho_lindenrain.tif'
          },
        ],
      })
    })
    cog.getSource().setAttributions(AoiLindenrain.attributions);
    const map = new Map({
      layers: [
        new TileLayer({source: new OSM()}),
        cog
      ],
      view: new View({
        center: [
          AoiLindenrain.extent.i0[0] + ( AoiLindenrain.extent.i0[2] - AoiLindenrain.extent.i0[0] ) / 2,
          AoiLindenrain.extent.i0[1] + ( AoiLindenrain.extent.i0[3] - AoiLindenrain.extent.i0[1] ) / 2
        ],
        zoom: 0
      }),
      target: this.map.nativeElement
    });
    getExtent(map, this.z, AoiLindenrain.ortho.max, AoiLindenrain);
  }
}