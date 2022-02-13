import { AoiStrenzfeld } from '../../shared/aoi';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

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

  ngAfterViewInit(): void {
    const WMS = new ImageLayer({
      extent: AoiStrenzfeld.extent,
      source: new ImageWMS({
        url: 'http://geoserver.masterarbeit-cog.de/wms',
        params: {'LAYERS': '	wms:dsm_strenzfeld_3857_35cm'},
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
          AoiStrenzfeld.extent[0] + ( AoiStrenzfeld.extent[2] - AoiStrenzfeld.extent[0] ) / 2,
          AoiStrenzfeld.extent[1] + ( AoiStrenzfeld.extent[3] - AoiStrenzfeld.extent[1] ) / 2
        ],
        zoom: 14
      }),
      target: this.map.nativeElement
    });
    map.getView().fit(AoiStrenzfeld.extent, { padding: [25, 25, 25, 25] });
  }
}
