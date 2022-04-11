import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardadasComponent } from './guardadas.component';

describe('GuardadasComponent', () => {
  let component: GuardadasComponent;
  let fixture: ComponentFixture<GuardadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
