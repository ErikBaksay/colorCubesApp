import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEmptyCartComponent } from './dialog-empty-cart.component';

describe('DialogEmptyCartComponent', () => {
  let component: DialogEmptyCartComponent;
  let fixture: ComponentFixture<DialogEmptyCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEmptyCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEmptyCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
