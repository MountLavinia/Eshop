import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralLandPageComponent } from './general-land-page.component';

describe('GeneralLandPageComponent', () => {
  let component: GeneralLandPageComponent;
  let fixture: ComponentFixture<GeneralLandPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralLandPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralLandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
