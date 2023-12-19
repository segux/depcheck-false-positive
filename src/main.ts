import { Component, ElementRef, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

import Lottie from 'lottie-web';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App {
  private el = inject(ElementRef);
  private lottieSrc = './assets/lottie.json';
  name = 'Angular';

  ngOnInit() {
    Lottie.loadAnimation({
      container: this.el.nativeElement,
      renderer: 'svg',
      path: this.lottieSrc,
      ´    });
  }
}

bootstrapApplication(App);
