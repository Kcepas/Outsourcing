import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSolutionsComponent } from './custom-solutions.component';

describe('CustomSolutionsComponent', () => {
  let component: CustomSolutionsComponent;
  let fixture: ComponentFixture<CustomSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomSolutionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
