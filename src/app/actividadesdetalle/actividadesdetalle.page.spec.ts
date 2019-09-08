import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesdetallePage } from './actividadesdetalle.page';

describe('ActividadesdetallePage', () => {
  let component: ActividadesdetallePage;
  let fixture: ComponentFixture<ActividadesdetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadesdetallePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadesdetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
