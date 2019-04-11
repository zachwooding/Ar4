import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenObjPage } from './gen-obj.page';

describe('GenObjPage', () => {
  let component: GenObjPage;
  let fixture: ComponentFixture<GenObjPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenObjPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenObjPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
