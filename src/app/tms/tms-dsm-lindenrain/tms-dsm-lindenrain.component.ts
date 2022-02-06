import { AoiLindenrain } from '../../shared/aoi';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
// Additional OL
import XYZ from 'ol/source/XYZ';

@Component({
  selector: 'app-tms-dsm-lindenrain',
  templateUrl: './tms-dsm-lindenrain.component.html',
  styleUrls: ['./tms-dsm-lindenrain.component.scss']
})
export class TmsDsmLindenrainComponent implements AfterViewInit {
  @ViewChild('map', { static: false }) map!: ElementRef;

  ngAfterViewInit(): void {
    const TMS = new TileLayer({
      extent: AoiLindenrain.extent,
      preload: Infinity,
      source: new XYZ({
        attributions: AoiLindenrain.attributions,
        maxZoom: AoiLindenrain.ortho.max,
        minZoom: AoiLindenrain.ortho.min,
        url: 'https://masterarbeit-cog.s3.eu-central-1.amazonaws.com/tms/dsm_lindenrain/{z}/{x}/{-y}.png',
      }),
    })
    const map = new Map({
      layers: [
        new TileLayer({source: new OSM()}),
        TMS
      ],
      view: new View({
        center: [
          AoiLindenrain.extent[0] + ( AoiLindenrain.extent[2] - AoiLindenrain.extent[0] ) / 2,
          AoiLindenrain.extent[1] + ( AoiLindenrain.extent[3] - AoiLindenrain.extent[1] ) / 2
        ],
        zoom: 0
      }),
      target: this.map.nativeElement
    });
    map.getView().fit(AoiLindenrain.extent, { padding: [25, 25, 25, 25] });
  }
}