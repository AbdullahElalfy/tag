import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprtiesComponent } from './proprties.component';

describe('ProprtiesComponent', () => {
  let component: ProprtiesComponent;
  let fixture: ComponentFixture<ProprtiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProprtiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProprtiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
