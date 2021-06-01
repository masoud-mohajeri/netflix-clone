import { Component } from '@angular/core';
import { films } from '../../assets/images/films/films.json';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  films = films[0];

  constructor() {}
}
