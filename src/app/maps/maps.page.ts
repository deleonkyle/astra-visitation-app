import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Zoom from 'ol/control/Zoom';
import { fromLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Icon, Style } from 'ol/style';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import { FeatureLike } from 'ol/Feature';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit, AfterViewInit {
  map!: Map;

  ngOnInit() {}

  ngAfterViewInit() {
    this.initializeMap();
  }

  initializeMap() {
    const defaultLocation = [121.08897123382235, 13.816875410563837]; // Longitude, Latitude
  
    const mapLayer = new TileLayer({
      source: new OSM(),
    });
  
    const markerFeatures = [
      new Feature({
        geometry: new Point(fromLonLat([121.08359511717133, 13.81714701453601])),
        name: 'Location 1',
        icon: 'assets/icon/pin.png',
      }),
      new Feature({
        geometry: new Point(fromLonLat([121.08392815752124, 13.817171249651956])),
        name: 'Location 2',
        icon: 'assets/icons/pin.png',
      }),
    ];
  
    const newMarkerFeature = new Feature({
      geometry: new Point(fromLonLat([121.07534946197649, 13.79297216174841])),
      name: 'New Location',
      icon: 'assets/icons/new-pin.png',
    });
  
    markerFeatures.push(newMarkerFeature);
  
    const markerStyle = (feature: FeatureLike) => {
      return new Style({
        image: new Icon({
          anchor: [0.5, 1],
          src: feature.get('icon'),
          scale: 0.04,
        }),
      });
    };
  
    const markerSource = new VectorSource({
      features: markerFeatures,
    });
  
    const markerLayer = new VectorLayer({
      source: markerSource,
      style: markerStyle,
    });
  
    this.map = new Map({
      target: 'map',
      layers: [mapLayer, markerLayer],
      view: new View({
        center: fromLonLat(defaultLocation),
        zoom: 15,
      }),
      controls: [new Zoom()],
    });
  }
  

  zoomIn() {
    const view = this.map.getView();
    const currentZoom = view.getZoom() ?? 0;
    view.setZoom(currentZoom + 1);
  }

  zoomOut() {
    const view = this.map.getView();
    const currentZoom = view.getZoom() ?? 0;
    view.setZoom(currentZoom - 1);
  }
  
  zoomToLevel(level: number) {
    const view = this.map.getView();
    view.setZoom(level);
  }
}
