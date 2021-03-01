import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarAutosComponent } from './actualizar-autos.component';

describe('ActualizarAutosComponent', () => {
  let component: ActualizarAutosComponent;
  let fixture: ComponentFixture<ActualizarAutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarAutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
