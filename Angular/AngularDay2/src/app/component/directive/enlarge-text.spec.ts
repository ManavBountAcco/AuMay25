import { EnlargeText } from './enlarge-text';
import { ElementRef } from '@angular/core';

describe('EnlargeText', () => {
  it('should create an instance', () => {
    const mockElement = document.createElement('p');
    const mockElementRef = new ElementRef(mockElement);
    const directive = new EnlargeText(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
