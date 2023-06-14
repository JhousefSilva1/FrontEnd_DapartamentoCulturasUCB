import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInterestComponent } from './modal-interest.component';

describe('ModalInterestComponent', () => {
  let component: ModalInterestComponent;
  let fixture: ComponentFixture<ModalInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalInterestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
