import { AoiLindenrain, getExtent } from '../../shared/aoi';
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
  selector: 'app-cogwms-dsm-lindenrain',
  templateUrl: './cogwms-dsm-lindenrain.component.html',
  styleUrls: ['./cogwms-dsm-lindenrain.component.scss']
})
export class CogwmsDsmLindenrainComponent implements AfterViewInit {
  @ViewChild('map', { static: false }) map!: ElementRef;
  z: number;

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe((params) => {
      this.z = Number(params.get('z'));
    })
  }

  ngAfterViewInit(): void {
    const WMS = new ImageLayer({
      extent: AoiLindenrain.extent.i0,
      source: new ImageWMS({
        attributions: AoiLindenrain.attributions,
        url: 'http://geoserver.masterarbeit-cog.de/wms',
        params: {'LAYERS': '	cog-wms:dsm_lindenrain'},
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
          AoiLindenrain.extent.i0[0] + ( AoiLindenrain.extent.i0[2] - AoiLindenrain.extent.i0[0] ) / 2,
          AoiLindenrain.extent.i0[1] + ( AoiLindenrain.extent.i0[3] - AoiLindenrain.extent.i0[1] ) / 2
        ],
        zoom: 0
      }),
      target: this.map.nativeElement
    });
    getExtent(map, this.z, AoiLindenrain.dsm.max, AoiLindenrain);
  }
}

