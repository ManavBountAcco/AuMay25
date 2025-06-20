import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './component/child/child';
import { Parent } from './component/parent/parent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Parent,Child],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'AngularDay2';
}
