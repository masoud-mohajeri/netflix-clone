import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { DrawerComponent } from '../components/drawer/drawer.component';
import { DrawerService } from '../services/drawer.service';

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
  constructor(
    private drawerService: DrawerService,
    private changeDetector: ChangeDetectorRef
  ) {
    // drawerService.drawerOpen.subscribe((drawerData) => {
    //   if (drawerData && drawerData.title) {
    //     this.drawer.openDrawer(drawerData.title);
    //   }
    // });
  }

  setSelectedTab() {
    this.selected = this.tabs.getSelected();
    console.log(this.selected);
  }

  closeDrawer() {
    this.drawer.closeDrawer();
  }

  toggleBackDrop(event) {
    // console.log(event);
    this.backDropVisible = event;
    this.changeDetector.detectChanges();
  }
}
