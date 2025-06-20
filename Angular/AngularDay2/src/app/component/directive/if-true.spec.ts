import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IfTrue } from './if-true';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <p *appIfTrue="true" class="test-para">Visible</p>
    <p *appIfTrue="false" class="test-para">Hidden</p>
  `
})
class TestHostComponent {}

describe('IfTrue Directive', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IfTrue, TestHostComponent]
    });
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should create the directive', () => {
    const directives = fixture.debugElement.queryAll(By.directive(IfTrue));
    expect(directives.length).toBe(2); // We applied it twice in template
  });

  it('should display content when condition is true', () => {
    const visible = fixture.nativeElement.querySelectorAll('.test-para');
    expect(visible.length).toBe(1);
    expect(visible[0].textContent).toContain('Visible');
  });
});

