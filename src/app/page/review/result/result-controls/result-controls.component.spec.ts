import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultControlsComponent } from './result-controls.component';

describe('ResultControlsComponent', () => {
  let component: ResultControlsComponent;
  let fixture: ComponentFixture<ResultControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultControlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
