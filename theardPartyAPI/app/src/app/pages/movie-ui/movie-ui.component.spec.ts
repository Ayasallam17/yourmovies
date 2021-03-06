import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieUIComponent } from './movie-ui.component';

describe('MovieUIComponent', () => {
  let component: MovieUIComponent;
  let fixture: ComponentFixture<MovieUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
