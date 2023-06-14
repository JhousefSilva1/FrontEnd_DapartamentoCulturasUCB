import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSubinteresesComponent } from './modal-subintereses.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [ModalSubinteresesComponent],
  imports: [BrowserModule, FormsModule], // Agrega FormsModule a los imports
  providers: [],
  bootstrap: [ModalSubinteresesComponent]
})
export class AppModule {}

describe('ModalSubinteresesComponent', () => {
  let component: ModalSubinteresesComponent;
  let fixture: ComponentFixture<ModalSubinteresesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSubinteresesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSubinteresesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
