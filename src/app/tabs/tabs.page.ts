import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { DrawerComponent } from '../components/drawer/drawer.component';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  @ViewChild(IonTabs) tabs;

  @ViewChild(DrawerComponent) drawer: DrawerComponent;
  backDropVisible = false;

  selected = '';
  constructor(private changeDetector: ChangeDetectorRef) {}

  setSelectedTab() {
    this.selected = this.tabs.getSelected();
  }

  closeDrawer() {
    this.drawer.closeDrawer();
  }

  toggleBackDrop(event) {
    this.backDropVisible = event;
    this.changeDetector.detectChanges();
  }
}
