import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.scss',
  encapsulation: ViewEncapsulation.ShadowDom //Emulated its default if we write or not 
})
export class Child {

}
