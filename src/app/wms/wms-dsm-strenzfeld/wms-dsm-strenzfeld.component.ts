import { AoiStrenzfeld, getExtent } from '../../shared/aoi';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
// import TileLayer from 'ol/layer/Tile';
// Additional OL
import {Image as ImageLayer, Tile as TileLayer} from 'ol/layer';
import ImageWMS from 'ol/source/ImageWMS';

@Component({
  selector: 'app-wms-dsm-strenzfeld',
  templateUrl: './wms-dsm-strenzfeld.component.html',
  styleUrls: ['./wms-dsm-strenzfeld.component.scss']
})
export class WmsDsmStrenzfeldComponent implements AfterViewInit {
  @ViewChild('map', { static: false }) map!: ElementRef;
  z: number;

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe((params) => {
      this.z = Number(params.get('z'));
    })
  }

  ngAfterViewInit(): void {
    const WMS = new ImageLayer({
      extent: AoiStrenzfeld.extent.i0,
      source: new ImageWMS({
        url: 'http://geoserver.masterarbeit-cog.de/wms',
        params: {'LAYERS': '	wms:dsm_strenzfeld'},
        ratio: 1,
        serverType: 'geoserver',
      }),
    });
    const map = new Map({
      layers: [
        new TileLayer({source: new OSM()}),
        WMS
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
    getExtent(map, this.z, AoiStrenzfeld.dsm.max, AoiStrenzfeld);
  }
}
