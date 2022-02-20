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
  selector: 'app-wmtstms-ortho-strenzfeld',
  templateUrl: './wmtstms-ortho-strenzfeld.component.html',
  styleUrls: ['./wmtstms-ortho-strenzfeld.component.scss']
})
export class WmtstmsOrthoStrenzfeldComponent implements AfterViewInit {
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
      source: new XYZ({
        attributions: AoiStrenzfeld.attributions,
        minZoom: AoiStrenzfeld.ortho.min,
        maxZoom: AoiStrenzfeld.ortho.max,
        url: 'https://geoserver.masterarbeit-cog.de/gwc/service/wmts?layer=wmts:ortho_strenzfeld&style=&tilematrixset=WebMercatorQuad_z23&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image/png&TileMatrix={z}&TileCol={x}&TileRow={y}'
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
        zoom: 0
      }),
      target: this.map.nativeElement
    });
    getExtent(map, this.z, AoiStrenzfeld.ortho.max, AoiStrenzfeld);
  }
}
