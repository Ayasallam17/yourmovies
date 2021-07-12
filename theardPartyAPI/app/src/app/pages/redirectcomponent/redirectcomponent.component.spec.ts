import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectcomponentComponent } from './redirectcomponent.component';

describe('RedirectcomponentComponent', () => {
  let component: RedirectcomponentComponent;
  let fixture: ComponentFixture<RedirectcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedirectcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
