import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectInterestComponent } from './select-interest.component';

describe('SelectInterestComponent', () => {
  let component: SelectInterestComponent;
  let fixture: ComponentFixture<SelectInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectInterestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
