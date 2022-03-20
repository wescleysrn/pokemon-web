import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendStyleComponent } from './frontend-style.component';

describe('FrontendStyleComponent', () => {
  let component: FrontendStyleComponent;
  let fixture: ComponentFixture<FrontendStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontendStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
