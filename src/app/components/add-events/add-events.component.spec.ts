import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventsComponent } from './add-events.component';


describe('AddEventsComponent', () => {
  let component: AddEventsComponent;
  let fixture: ComponentFixture<AddEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
describe('AddEvent', () => {
  let component: AddEventsComponent;
  let fixt: ComponentFixture<AddEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEventsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixt = TestBed.createComponent(AddEventsComponent);
    component = fixt.componentInstance;
    fixt.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});