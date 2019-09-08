import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public sitiosturisticos = [{
    url: '../../../assets/images/candelaria.jpg',
    nombre: 'Shared Walking Tour La Candelaria Bogotá',
    // tslint:disable-next-line:max-line-length
    descripcion: 'Get a more intimate glimpse into the historic neighborhood of La Candelaria on a walking tour that offers a great introduction for travelers visiting Bogota for the first time. As well as offering the inside scoop'
  },
  {
    url: '../../../assets/images/monserrate.jpg',
    nombre: 'Monserrate',
    // tslint:disable-next-line:max-line-length
    descripcion: "Join us in this thorough tour of Bogotá's downtown and historical center! From graffitis that embody the city's indigenous past, emerald classification and coca-leaf tea tasting, to the wonderful Gold Museum, filled to the brim with spectacular jewerly, and the Botero Museum's amazing collection. And so much more! Don't miss out on this wonderful tour."
  },
  {
    url: '../../../assets/images/catedral.jpg',
    nombre: 'Zipaquirá Salt Cathedral',
    // tslint:disable-next-line:max-line-length
    descripcion: 'The Zipaquirá Salt Cathedral is not like other churches. Descend hundreds of feet underground to explore this unique creation which was carved into the walls and ceiling of an abandoned salt mine. Explore the dimly lit tunnels along wide pathways as a bilingual guide explains the history and significance of the Zipaquirá Salt Cathedral. This half-day cultural tour is perfect for the whole family.'
  },
  {
    url: '../../../assets/images/ghost.jpg',
    nombre: 'Ghost Tour- Historical Center Bogota',
    // tslint:disable-next-line:max-line-length
    descripcion: 'This tour provides a live experience with the ghosts of the colonial stories around La candelaria neighborhood.'
  },
  {
    url: '../../../assets/images/tren.jpg',
    nombre: 'Heritage Train - only for weekends and public holidays',
  // tslint:disable-next-line:max-line-length
    descripcion: 'Enjoy a different view of downtown, north part of Bogota and its surrounding, in a classic train. You will also discover the towns of Zipaquira and Cajica with the option of taking an additional tour to Zipaquira´s Salt Cathedral.'
  }
];




  constructor() {}
}
