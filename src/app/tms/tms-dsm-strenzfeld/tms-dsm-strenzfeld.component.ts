import { AoiStrenzfeld } from '../../shared/aoi';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
// Additional OL
import XYZ from 'ol/source/XYZ';

@Component({
  selector: 'app-tms-dsm-strenzfeld',
  templateUrl: './tms-dsm-strenzfeld.component.html',
  styleUrls: ['./tms-dsm-strenzfeld.component.scss']
})
export class TmsDsmStrenzfeldComponent implements AfterViewInit {
  @ViewChild('map', { static: false }) map!: ElementRef;

  ngAfterViewInit(): void {
    const TMS = new TileLayer({
      extent: AoiStrenzfeld.extent,
      preload: Infinity,
      source: new XYZ({
        attributions: AoiStrenzfeld.attributions,
        maxZoom: AoiStrenzfeld.dsm.max,
        minZoom: AoiStrenzfeld.dsm.min,
        url: 'https://masterarbeit-cog.s3.eu-central-1.amazonaws.com/tms/dsm_strenzfeld/{z}/{x}/{-y}.png'
      }),
    })
    const map = new Map({
      layers: [
        new TileLayer({source: new OSM()}),
        TMS
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
    map.getView().fit(AoiStrenzfeld.extent);
  }
}
