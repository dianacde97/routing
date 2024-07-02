import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachRoutingComponent } from './teach-routing.component';

describe('TeachRoutingComponent', () => {
  let component: TeachRoutingComponent;
  let fixture: ComponentFixture<TeachRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachRoutingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeachRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
