import { AoiLindenrain, getExtent } from './../../shared/aoi';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
// Additional OL
import XYZ from 'ol/source/XYZ';

@Component({
  selector: 'app-tms-ortho-lindenrain',
  templateUrl: './tms-ortho-lindenrain.component.html',
  styleUrls: ['./tms-ortho-lindenrain.component.scss']
})
export class TmsOrthoLindenrainComponent implements AfterViewInit {
  @ViewChild('map', { static: false }) map!: ElementRef;
  z: number;

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe((params) => {
      this.z = Number(params.get('z'));
    })
  }

  ngAfterViewInit(): void {
    const TMS = new TileLayer({
      extent: AoiLindenrain.extent.i0,
      preload: Infinity,
      source: new XYZ({
        attributions: AoiLindenrain.attributions,
        minZoom: AoiLindenrain.ortho.min,
        maxZoom: AoiLindenrain.ortho.max,
        url: 'https://data.masterarbeit-cog.de/tms/ortho_lindenrain/{z}/{x}/{-y}.png'
      }),
    })
    const map = new Map({
      layers: [
        new TileLayer({source: new OSM()}),
        TMS
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