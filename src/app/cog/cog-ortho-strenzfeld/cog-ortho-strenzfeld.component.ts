import { AoiStrenzfeld } from './../../shared/aoi';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';



import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
//import TileLayer from 'ol/layer/Tile';
// Additional OL
import GeoTIFF from 'ol/source/GeoTIFF';
import TileLayer from 'ol/layer/WebGLTile';


@Component({
  selector: 'app-cog-ortho-strenzfeld',
  templateUrl: './cog-ortho-strenzfeld.component.html',
  styleUrls: ['./cog-ortho-strenzfeld.component.scss']
})
export class CogOrthoStrenzfeldComponent implements AfterViewInit {
  @ViewChild('map', { static: false }) map!: ElementRef;

  ngAfterViewInit(): void {
    const cog = new TileLayer({
      extent: AoiStrenzfeld.extent,
      source: new GeoTIFF({
        sources: [
          {
            url: 'https://masterarbeit-cog.s3.eu-central-1.amazonaws.com/cog/ortho_strenzfeld.tif'
          },
        ],
      })
    })
    const map = new Map({
      layers: [
        new TileLayer({source: new OSM()}),
        cog
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
