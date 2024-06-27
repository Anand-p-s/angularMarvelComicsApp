import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsDetailsComponent } from './comics-details.component';

describe('ComicsDetailsComponent', () => {
  let component: ComicsDetailsComponent;
  let fixture: ComponentFixture<ComicsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComicsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComicsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
