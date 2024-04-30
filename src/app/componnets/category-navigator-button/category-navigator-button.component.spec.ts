import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryNavigatorButtonComponent } from './category-navigator-button.component';

describe('CategoryNavigatorButtonComponent', () => {
  let component: CategoryNavigatorButtonComponent;
  let fixture: ComponentFixture<CategoryNavigatorButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryNavigatorButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryNavigatorButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
