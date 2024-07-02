import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesageErrorComponent } from './mesage-error.component';

describe('MesageErrorComponent', () => {
  let component: MesageErrorComponent;
  let fixture: ComponentFixture<MesageErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesageErrorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MesageErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
