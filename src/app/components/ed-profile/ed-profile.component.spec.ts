import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdProfileComponent } from './ed-profile.component';

describe('EdProfileComponent', () => {
  let component: EdProfileComponent;
  let fixture: ComponentFixture<EdProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
