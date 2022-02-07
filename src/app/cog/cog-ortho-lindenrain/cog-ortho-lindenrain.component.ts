import { AoiLindenrain } from './../../shared/aoi';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';



import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
//import TileLayer from 'ol/layer/Tile';
// Additional OL
import GeoTIFF from 'ol/source/GeoTIFF';
import TileLayer from 'ol/layer/WebGLTile';

@Component({
  selector: 'app-cog-ortho-lindenrain',
  templateUrl: './cog-ortho-lindenrain.component.html',
  styleUrls: ['./cog-ortho-lindenrain.component.scss']
})
export class CogOrthoLindenrainComponent implements AfterViewInit {
  @ViewChild('map', { static: false }) map!: ElementRef;

  ngAfterViewInit(): void {
    const cog = new TileLayer({
      extent: AoiLindenrain.extent,
      source: new GeoTIFF({
        sources: [
          {
            
            url: 'https://masterarbeit-cog.s3.eu-central-1.amazonaws.com/cog/ortho_lindenrain.tif'
          },
        ],
      })
    })
    cog.getSource().setAttributions(AoiLindenrain.attributions);
    const map = new Map({
      layers: [
        new TileLayer({source: new OSM()}),
        cog
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