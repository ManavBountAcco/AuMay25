import { Component } from '@angular/core';
import { TextColor } from './text-color'; // matches the file and class name
 // ✅ Use correct file name
import { ToggleBg } from './toggle-bg';
import { EnlargeText } from './enlarge-text';
import { IfTrue } from './if-true';

@Component({
  selector: 'app-directive',
  standalone: true, // ✅ add this if you're using standalone component
  imports: [
    TextColor,
    ToggleBg,
    EnlargeText,
    IfTrue
  ],
  templateUrl: './directive.html',
  styleUrls: ['./directive.scss']  // ✅ 'styleUrls' not 'styleUrl'
})
export class DirectiveComponent {
  showMessage = true;
}

