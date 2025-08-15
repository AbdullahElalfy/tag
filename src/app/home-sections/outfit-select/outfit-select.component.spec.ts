import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutfitSelectComponent } from './outfit-select.component';

describe('OutfitSelectComponent', () => {
  let component: OutfitSelectComponent;
  let fixture: ComponentFixture<OutfitSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutfitSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutfitSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
