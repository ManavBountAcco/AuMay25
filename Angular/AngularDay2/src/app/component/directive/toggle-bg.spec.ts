import { ToggleBg } from './toggle-bg';
import { ElementRef } from '@angular/core';

describe('ToggleBg', () => {
  it('should create an instance', () => {
    const mockElement = document.createElement('button');
    const mockElementRef = new ElementRef(mockElement);
    const directive = new ToggleBg(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
