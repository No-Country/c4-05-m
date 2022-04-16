import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPublicacion1Component } from './crear-publicacion1.component';

describe('CrearPublicacion1Component', () => {
  let component: CrearPublicacion1Component;
  let fixture: ComponentFixture<CrearPublicacion1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPublicacion1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPublicacion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
