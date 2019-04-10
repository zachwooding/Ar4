import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArCamPage } from './ar-cam.page';

describe('ArCamPage', () => {
  let component: ArCamPage;
  let fixture: ComponentFixture<ArCamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArCamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArCamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
