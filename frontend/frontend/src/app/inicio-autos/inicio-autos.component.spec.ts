import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioAutosComponent } from './inicio-autos.component';

describe('InicioAutosComponent', () => {
  let component: InicioAutosComponent;
  let fixture: ComponentFixture<InicioAutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioAutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
