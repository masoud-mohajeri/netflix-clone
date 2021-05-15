import {
  AfterViewInit,
  Directive,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { DomController } from '@ionic/angular';
import { isPlatform } from '@ionic/core';

@Directive({
  selector: '[appHideHeader]',
})
export class HideHeaderDirective implements AfterViewInit {
  @Input('appHideHeader') header: any;
  private headerHeight = isPlatform('ios') ? 44 : 55;
  private Children: any;

  constructor(private renderer: Renderer2, private domCtrl: DomController) {}

  ngAfterViewInit() {
    this.header = this.header.el;
    this.Children = this.header.children;
  }

  @HostListener('ionScroll', ['$event']) onControlScroll($event) {
    const scrollTop: number = $event.detail.scrollTop;
    if (scrollTop < 0) {
      return;
    }

    let newPosition = -scrollTop / 2;
    if (newPosition < -this.headerHeight) {
      newPosition = -this.headerHeight;
    }

    let newOpacity = 1 - newPosition / -this.headerHeight;

    this.domCtrl.write(() => {
      this.renderer.setStyle(this.header, 'top', newPosition + 'px');
      for (let c of this.Children) {
        this.renderer.setStyle(c, 'opacity', newOpacity);
      }
    });
  }
}
