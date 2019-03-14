import {Component, Directive, ElementRef, HostListener, Renderer} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prague Devils';

  constructor(private el: ElementRef, private renderer: Renderer) {}

}
