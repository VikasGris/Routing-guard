import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFound1Component } from './page-found1.component';

describe('PageFound1Component', () => {
  let component: PageFound1Component;
  let fixture: ComponentFixture<PageFound1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFound1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFound1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
