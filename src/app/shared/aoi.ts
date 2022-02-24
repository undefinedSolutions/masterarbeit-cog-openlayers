import Map from 'ol/Map';

export interface AOI {
  attributions: string;
  dsm: {
    min: number;
    max: number;
  };
  extent: {
    i0: number[];
    ip3: number[];
    in3: number[];
  }
  ortho: {
    min: number;
    max: number;
  };
}

export const AoiLindenrain = {
  attributions: "undefined Solutions GmbH",
  dsm: {
    min: 0,
    max: 21
  },
  extent: {
    i0:  [975839, 6220091, 977070, 6220877],
    ip3: [976350, 6220432, 976559, 6220536],
    in3: [969772, 6217161, 983137, 6223807],
  },
  ortho: {
    min: 0,
    max: 23
  }
}

export const AoiStrenzfeld = {
  attributions: 'Institut für Geoinformation und Vermessung (IGV), <a href="https://gyrocopter.afg.hs-anhalt.de/" rel="noopener" target="_blank">Hochschule Anhalt</a>',
  dsm: {
    min: 0,
    max: 19,
    values: {
      min: 57,
      max: 112
    }
  },
  extent: {
    i0:  [1299642, 6765838, 1304883, 6769892],
    ip3: [1301724, 6767597, 1302801, 6768133],
    in3: [1267779, 6750716, 1336746, 6785013],
  },
  ortho: {
    min: 0,
    max: 21,
  }
}

export function getExtent(map: Map, z: number, maxZ: number, aoi: AOI): void {
  if (z === 0) {
    map.getView().fit(aoi.extent.i0, { padding: [25, 25, 25, 25] });
  } else if (z === 1) {
    map.getView().fit(aoi.extent.in3, { padding: [25, 25, 25, 25] });
  } else if (z === 2) {
    map.getView().fit(aoi.extent.ip3, { padding: [25, 25, 25, 25] });
  } else {
    map.getView().setZoom(maxZ)
  }
}