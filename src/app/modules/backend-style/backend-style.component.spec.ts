import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendStyleComponent } from './backend-style.component';

describe('BackendStyleComponent', () => {
  let component: BackendStyleComponent;
  let fixture: ComponentFixture<BackendStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackendStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
