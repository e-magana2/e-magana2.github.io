import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarddrawerComponent } from './card-drawer.component';

describe('CarddrawerComponent', () => {
  let component: CarddrawerComponent;
  let fixture: ComponentFixture<CarddrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarddrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarddrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
