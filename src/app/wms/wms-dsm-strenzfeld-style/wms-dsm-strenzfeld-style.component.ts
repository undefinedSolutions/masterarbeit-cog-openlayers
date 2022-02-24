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
  selector: 'app-wms-dsm-strenzfeld-style',
  templateUrl: './wms-dsm-strenzfeld-style.component.html',
  styleUrls: ['./wms-dsm-strenzfeld-style.component.scss']
})
export class WmsDsmStrenzfeldStyleComponent implements AfterViewInit {
  @ViewChild('map', { static: false }) map!: ElementRef;
  styleElement: HTMLSelectElement;
  wms: any;
  z: number;

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe((params) => {
      this.z = Number(params.get('z'));
    })
  }

  ngAfterViewInit(): void {
    this.styleElement = document.getElementById("style") as HTMLSelectElement;

    this.wms = new ImageLayer({
      extent: AoiStrenzfeld.extent.i0,
      source: new ImageWMS({
        attributions: AoiStrenzfeld.attributions,
        url: 'http://geoserver.masterarbeit-cog.de/wms',
        params: {'LAYERS': 'wms:dsm_strenzfeld'},
        ratio: 1,
        serverType: 'geoserver',
      }),
    });
    const map = new Map({
      layers: [
        new TileLayer({source: new OSM()}),
        this.wms
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

  onChange() {
    const style = this.styleElement.value;
    if (style === 'GnYlRd') {
      this.wms.getSource().updateParams({'LAYERS': 'wms:dsm_strenzfeld', 'STYLES': 'dsm_strenzfeld-inv'});
    } else if (style === 'RdYlGn') {
      this.wms.getSource().updateParams({'LAYERS': 'wms:dsm_strenzfeld', 'STYLES': 'dsm_strenzfeld'});
    }
    //this.cog.setStyle(style);
  }
}
