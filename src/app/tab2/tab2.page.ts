import { Component } from '@angular/core';
import { films } from '../../assets/images/films/films.json';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  films = films;
  ops = {
    slidesPerView: 3.2,
    loop: true,
    spaceBetween: 10,
  };
  constructor() {}
}
