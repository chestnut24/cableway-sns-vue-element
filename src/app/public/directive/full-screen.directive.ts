import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import * as screenfull from 'screenfull';

@Directive({
  selector: '[appFullScreen]'
})

export class FullScreenDirective {
  @Input() appFullScreen: string;
  public isFullScreen = false;
  constructor() { }
  @HostListener('click') onClick() {
    console.log(this.appFullScreen)
    // @ts-ignore
    if (screenfull.isEnabled) {
      console.log(this.appFullScreen, 2222)
      // @ts-ignore
      screenfull.toggle(document.getElementById(this.appFullScreen));
      this.isFullScreen = !this.isFullScreen;
    }
    // screenfull.toggle(document.getElementById(this.appFullScreen));
  }
}
