import { AoiStrenzfeld, getExtent } from '../../shared/aoi';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
// Additional OL
//import {Image as ImageLayer, Tile as TileLayer} from 'ol/layer';
import WMTS from 'ol/source/WMTS';
import WMTSTileGrid from 'ol/tilegrid/WMTS';
import {get as getProjection} from 'ol/proj';
import {getTopLeft, getWidth} from 'ol/extent';

@Component({
  selector: 'app-wmts-dsm-strenzfeld',
  templateUrl: './wmts-dsm-strenzfeld.component.html',
  styleUrls: ['./wmts-dsm-strenzfeld.component.scss']
})
export class WmtsDsmStrenzfeldComponent implements AfterViewInit {
  @ViewChild('map', { static: false }) map!: ElementRef;
  z: number;

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe((params) => {
      this.z = Number(params.get('z'));
    })
  }

  ngAfterViewInit(): void {
    const projection = getProjection('EPSG:3857');
    const projectionExtent = projection.getExtent();
    const size = getWidth(projectionExtent) / 256;
    const resolutions = new Array(AoiStrenzfeld.dsm.max + 1);
    const matrixIds = new Array(AoiStrenzfeld.dsm.max + 1);
    for (let z = 0; z < AoiStrenzfeld.dsm.max + 1; ++z) {
      // generate resolutions and matrixIds arrays for this WMTS
      resolutions[z] = size / Math.pow(2, z);
      matrixIds[z] = z;
    }
    const WMTSLayer = new TileLayer({
      extent: AoiStrenzfeld.extent.i0,
      source: new WMTS({
        attributions: AoiStrenzfeld.attributions,
        url: 'https://geoserver.masterarbeit-cog.de/gwc/service/wmts',
        layer: 'wmts:dsm_strenzfeld',
        matrixSet: 'WebMercatorQuad_z23',
        format: 'image/png',
        projection: projection,
        tileGrid: new WMTSTileGrid({
          origin: getTopLeft(projectionExtent),
          resolutions: resolutions,
          matrixIds: matrixIds,
        }),
        style: '',
      }),
    });
    const map = new Map({
      layers: [
        new TileLayer({source: new OSM()}),
        WMTSLayer
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
    getExtent(map, this.z, AoiStrenzfeld.dsm.max, AoiStrenzfeld);
  }
}
