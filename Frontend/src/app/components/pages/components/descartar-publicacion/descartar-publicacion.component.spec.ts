import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescartarPublicacionComponent } from './descartar-publicacion.component';

describe('DescartarPublicacionComponent', () => {
  let component: DescartarPublicacionComponent;
  let fixture: ComponentFixture<DescartarPublicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescartarPublicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescartarPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
