import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewLocationTypeComponent } from './add-new-location-type.component';

describe('AddNewLocationTypeComponent', () => {
  let component: AddNewLocationTypeComponent;
  let fixture: ComponentFixture<AddNewLocationTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewLocationTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewLocationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
