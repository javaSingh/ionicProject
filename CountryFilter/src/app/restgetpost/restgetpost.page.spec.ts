import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RESTGETPOSTPage } from './restgetpost.page';

describe('RESTGETPOSTPage', () => {
  let component: RESTGETPOSTPage;
  let fixture: ComponentFixture<RESTGETPOSTPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RESTGETPOSTPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RESTGETPOSTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
