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
  selector: 'app-cog-dsm-strenzfeld-style',
  templateUrl: './cog-dsm-strenzfeld-style.component.html',
  styleUrls: ['./cog-dsm-strenzfeld-style.component.scss']
})
export class CogDsmStrenzfeldStyleComponent implements AfterViewInit {
  @ViewChild('map', { static: false }) map!: ElementRef;
  styleElement: HTMLSelectElement;
  cog: TileLayer;
  z: number;

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe((params) => {
      this.z = Number(params.get('z'));
    })
  }

  styles = {
    'RdYlGn': {
      color: [
        'interpolate',
        ['linear'],
        // Angabe welches Band betrachtet wird
        ['band', 1],
        // Höhenwerte gefolgt von RGB(A)-Farbwerten
        57,
        [0, 0, 0, 0],
        57,
        [44, 129, 184],
        70.75,
        [171, 223, 167],
        84.5,
        [255, 255, 195],
        98.25,
        [253, 178, 103],
        112,
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
        57,
        [0, 0, 0, 0],
        57,
        [215, 16 ,29],
        70.75,
        [253, 178, 103],
        84.5,
        [255, 255, 195],
        98.25,
        [171, 223, 167],
        112,
        [44, 129, 184],
      ],
    }
  }
  onChange() {
    const style = this.styles[this.styleElement.value];
    this.cog.setStyle(style);
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
      style: this.styles['RdYlGn'],
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
