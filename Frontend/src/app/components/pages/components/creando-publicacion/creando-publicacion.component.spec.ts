import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreandoPublicacionComponent } from './creando-publicacion.component';

describe('CreandoPublicacionComponent', () => {
  let component: CreandoPublicacionComponent;
  let fixture: ComponentFixture<CreandoPublicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreandoPublicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreandoPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
