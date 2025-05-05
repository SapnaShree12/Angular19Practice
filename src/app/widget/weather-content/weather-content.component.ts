import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-content',
  imports: [],
  template: `<div class="sky-condition">☀️</div>
  <div class="temperature">{{ temperature }}°C</div>
`,
  styleUrl: './weather-content.component.scss'
})
export class WeatherContentComponent {
  protected lastUpdateAt: Date = new Date();
  protected temperature = 21;

  updateData() {
    console.log('performs request to server, etc...')
    this.temperature = 19;
    this.lastUpdateAt = new Date();
  }

}
