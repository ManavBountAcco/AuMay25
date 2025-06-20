import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveComponent } from './directive'; // ✅ Correct import

describe('DirectiveComponent', () => {
  let component: DirectiveComponent;
  let fixture: ComponentFixture<DirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveComponent] // if it's a standalone component
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


describe('DirectiveComponent', () => {
  let component: DirectiveComponent;
  let fixture: ComponentFixture<DirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveComponent] // if it's a standalone component
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
