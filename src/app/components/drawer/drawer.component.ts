import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { DrawerService } from 'src/app/services/drawer.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit {
  title = 'title';
  @ViewChild('drawer', { read: ElementRef }) drawer: ElementRef;
  @Output('openStateChanged') openState: EventEmitter<boolean> =
    new EventEmitter();

  constructor(private drawerService: DrawerService) {
    drawerService.drawerOpen.subscribe((drawerData) => {
      if (drawerData && drawerData.title) {
        this.openDrawer(drawerData.title);
      }
    });
  }

  ngOnInit() {}

  openDrawer(title: string) {
    this.title = title;
    const drawer = this.drawer.nativeElement;
    drawer.style.transition = '0.2s ease-in';
    drawer.style.transform = 'translateY(-300px)';
    this.openState.emit(true);
  }

  closeDrawer() {
    const drawer = this.drawer.nativeElement;
    drawer.style.transition = '0.2s ease-out';
    drawer.style.transform = '';
    this.openState.emit(false);
  }
}
