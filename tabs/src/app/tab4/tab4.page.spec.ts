import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { tab4Page } from './tab4.page';

describe('tab4Page', () => {
  let component: tab4Page;
  let fixture: ComponentFixture<tab4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [tab4Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(tab4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
