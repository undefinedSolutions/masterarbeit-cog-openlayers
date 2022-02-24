import { AoiStrenzfeld, getExtent } from '../../shared/aoi';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
//import TileLayer from 'ol/layer/Tile';
// Additional OL
import GeoTIFF from 'ol/source/GeoTIFF';
import TileLayer from 'ol/layer/WebGLTile';

@Component({
  selector: 'app-cog-dsm-strenzfeld-style-range',
  templateUrl: './cog-dsm-strenzfeld-style-range.component.html',
  styleUrls: ['./cog-dsm-strenzfeld-style-range.component.scss']
})
export class CogDsmStrenzfeldStyleRangeComponent implements AfterViewInit {
  @ViewChild('map', { static: false }) map!: ElementRef;
  styleElement: HTMLSelectElement;
  cog: TileLayer;
  z: number;

  dsm = {
    min: AoiStrenzfeld.dsm.values.min,
    minFixed: AoiStrenzfeld.dsm.values.min,
    max: AoiStrenzfeld.dsm.values.max,
    maxFixed: AoiStrenzfeld.dsm.values.max
  }

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe((params) => {
      this.z = Number(params.get('z'));
    })
  }

  calcValue(step: number): number {
    const diff = (this.dsm.max - this.dsm.min) / 4
    return this.dsm.min + diff * step
  }

  getStyles() {
    return {
      'RdYlGn': {
        color: [
          'interpolate',
          ['linear'],
          // Angabe welches Band betrachtet wird
          ['band', 1],
          // Höhenwerte gefolgt von RGB(A)-Farbwerten
          this.dsm.minFixed-0.01,
          [44, 129, 184, 0],
          this.dsm.minFixed,
          [44, 129, 184],
          this.calcValue(0),
          [44, 129, 184],
          this.calcValue(1),
          [171, 223, 167],
          this.calcValue(2),
          [255, 255, 195],
          this.calcValue(3),
          [253, 178, 103],
          this.calcValue(4),
          [215, 16 ,29],
        ],
      },
      'GnYlRd': {
        color: [
          'interpolate',
          ['linear'],
          // Angabe welches Band betrachtet wird
          ['band', 1],
          // Höhenwerte gefolgt von RGB(A)-Farbwerten
          this.dsm.minFixed-0.01,
          [0, 0, 0, 0],
          this.dsm.minFixed,
          [215, 16 ,29],
          this.calcValue(0),
          [215, 16 ,29],
          this.calcValue(1),
          [253, 178, 103],
          this.calcValue(2),
          [255, 255, 195],
          this.calcValue(3),
          [171, 223, 167],
          this.calcValue(4),
          [44, 129, 184],
        ],
      }
    }
}
  onChange() {
    const style = this.getStyles()[this.styleElement.value];
    this.cog.setStyle(style);
  }

  updateMin(value: any): void {
    this.dsm.min = Number(value);
    this.onChange();
  }

  updateMax(value: any): void {
    this.dsm.max = Number(value);
    this.onChange();
  }

  ngAfterViewInit(): void {
    this.styleElement = document.getElementById("style") as HTMLSelectElement;
        
    this.cog = new TileLayer({
      source: new GeoTIFF({
        normalize: false,
        sources: [
          {
            url: 'https://data.masterarbeit-cog.de/cog/dsm_strenzfeld.tif',
          },
        ],
      }),
      style: this.getStyles()['RdYlGn'],
    });
    this.cog.getSource().setAttributions(AoiStrenzfeld.attributions);
    const map = new Map({
      layers: [
        new TileLayer({source: new OSM()}),
        this.cog
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
