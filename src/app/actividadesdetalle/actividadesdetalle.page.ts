import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actividadesdetalle',
  templateUrl: './actividadesdetalle.page.html',
  styleUrls: ['./actividadesdetalle.page.scss'],
})
export class ActividadesdetallePage implements OnInit {
  imagen: string;
  titulo: string;
  detalle: string;
  actividad: string;

  constructor(private activatedRoute: ActivatedRoute)
    {
    }

  ngOnInit() {
    this.actividad = this.activatedRoute.snapshot.paramMap.get('id');
  }

  onclic() {
    return this.actividad;
  }
}
