import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicDetailCardComponent } from './comic-detail-card.component';

describe('ComicDetailCardComponent', () => {
  let component: ComicDetailCardComponent;
  let fixture: ComponentFixture<ComicDetailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComicDetailCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComicDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
