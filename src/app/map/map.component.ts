import { AfterViewInit, Component, ElementRef, viewChild } from '@angular/core';
import { Map } from 'maplibre-gl';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent implements AfterViewInit {
  private readonly mapContainer = viewChild<ElementRef>('mapContainer');
  private map?: Map = undefined;

  ngAfterViewInit() {
    this.map = new Map({
      container: this.mapContainer()?.nativeElement,
      zoom: 10,
      center: [5.127684, 52.0809856],
      style: 'https://api.maptiler.com/maps/streets/style.json?key=mEcMYH4LeHvlyd1FeMwK',
    });
  }
}
