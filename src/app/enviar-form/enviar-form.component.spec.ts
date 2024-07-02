import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarFormComponent } from './enviar-form.component';

describe('EnviarFormComponent', () => {
  let component: EnviarFormComponent;
  let fixture: ComponentFixture<EnviarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnviarFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnviarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
