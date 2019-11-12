import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableofcontentsPage } from './tableofcontents.page';

describe('TableofcontentsPage', () => {
  let component: TableofcontentsPage;
  let fixture: ComponentFixture<TableofcontentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableofcontentsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableofcontentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
