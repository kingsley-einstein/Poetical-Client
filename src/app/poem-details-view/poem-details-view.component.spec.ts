import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoemDetailsViewComponent } from './poem-details-view.component';

describe('PoemDetailsViewComponent', () => {
  let component: PoemDetailsViewComponent;
  let fixture: ComponentFixture<PoemDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoemDetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoemDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
