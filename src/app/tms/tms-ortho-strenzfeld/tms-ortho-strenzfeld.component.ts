import { AoiStrenzfeld, getExtent } from './../../shared/aoi';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
// Additional OL
import XYZ from 'ol/source/XYZ';

@Component({
  selector: 'app-tms-ortho-strenzfeld',
  templateUrl: './tms-ortho-strenzfeld.component.html',
  styleUrls: ['./tms-ortho-strenzfeld.component.scss']
})
export class TmsOrthoStrenzfeldComponent implements AfterViewInit {
  @ViewChild('map', { static: false }) map!: ElementRef;
  z: number;

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe((params) => {
      this.z = Number(params.get('z'));
    })
  }

  ngAfterViewInit(): void {
    const TMS = new TileLayer({
      extent: AoiStrenzfeld.extent.i0,
      preload: Infinity,
      source: new XYZ({
        attributions: AoiStrenzfeld.attributions,
        minZoom: AoiStrenzfeld.ortho.min,
        maxZoom: AoiStrenzfeld.ortho.max,
        url: 'https://data.masterarbeit-cog.de/tms/ortho_strenzfeld/{z}/{x}/{-y}.png'
      }),
    })
    const map = new Map({
      layers: [
        new TileLayer({source: new OSM()}),
        TMS
      ],
      view: new View({
        center: [
          AoiStrenzfeld.extent.i0[0] + ( AoiStrenzfeld.extent.i0[2] - AoiStrenzfeld.extent.i0[0] ) / 2,
          AoiStrenzfeld.extent.i0[1] + ( AoiStrenzfeld.extent.i0[3] - AoiStrenzfeld.extent.i0[1] ) / 2
        ],
        zoom: 14
      }),
      target: this.map.nativeElement
    });
    getExtent(map, this.z, AoiStrenzfeld.ortho.max, AoiStrenzfeld);
  }
}
