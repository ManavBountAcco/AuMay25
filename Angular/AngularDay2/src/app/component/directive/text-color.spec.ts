import { TextColor } from './text-color';
import { ElementRef } from '@angular/core';

describe('TextColor Directive', () => {
  it('should create an instance', () => {
    // Create a fake HTML element for testing
    const mockElement = document.createElement('p');
    const mockElementRef = new ElementRef(mockElement);

    // Pass the mock ElementRef to the directive
    const directive = new TextColor(mockElementRef);

    // Expect the directive to be created successfully
    expect(directive).toBeTruthy();
  });

  it('should change text color on mouseenter', () => {
    const mockElement = document.createElement('p');
    const mockElementRef = new ElementRef(mockElement);
    const directive = new TextColor(mockElementRef);

    directive.onMouseEnter();
    expect(mockElement.style.color).toBe('blue');
  });

  it('should reset text color on mouseleave', () => {
    const mockElement = document.createElement('p');
    const mockElementRef = new ElementRef(mockElement);
    const directive = new TextColor(mockElementRef);

    directive.onMouseEnter(); // set it blue first
    directive.onMouseLeave(); // reset
    expect(mockElement.style.color).toBe('');
  });
});
