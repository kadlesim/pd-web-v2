import {Component, Directive, ElementRef, HostListener, Renderer} from '@angular/core';

declare const window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prague Devils';

  constructor() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const num = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const shrinkableHeader = document.getElementById('shrinkable-header');
    const pdLogo = document.getElementById('pd-logo');
    if (num > 50) {
      console.log('You are 100px from the top to bottom');
      shrinkableHeader.setAttribute('style', 'height: 7vh;');
      pdLogo.setAttribute('style', 'height: 5vh;');

    } else if (num <= 50) {
      console.log('You are 500px from the top to bottom');
      shrinkableHeader.setAttribute('style', 'height: 10vh;');
      pdLogo.setAttribute('style', 'height: 7vh;');
    }
  }

}
