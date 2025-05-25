import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProgressComponent } from './our-progress.component';

describe('OurProgressComponent', () => {
  let component: OurProgressComponent;
  let fixture: ComponentFixture<OurProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
