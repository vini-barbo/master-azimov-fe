import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultPaginationComponent } from './result-pagination.component';

describe('ResultPaginationComponent', () => {
  let component: ResultPaginationComponent;
  let fixture: ComponentFixture<ResultPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultPaginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
