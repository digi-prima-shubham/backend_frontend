import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenotfounfdComponent } from './pagenotfounfd.component';

describe('PagenotfounfdComponent', () => {
  let component: PagenotfounfdComponent;
  let fixture: ComponentFixture<PagenotfounfdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagenotfounfdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenotfounfdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
