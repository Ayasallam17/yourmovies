import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowPlayComponent } from './now-play.component';

describe('NowPlayComponent', () => {
  let component: NowPlayComponent;
  let fixture: ComponentFixture<NowPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NowPlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NowPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
