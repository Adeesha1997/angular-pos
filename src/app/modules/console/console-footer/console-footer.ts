import { Component } from '@angular/core';

@Component({
  selector: 'app-console-footer',
  standalone: false,
  templateUrl: './console-footer.html',
  styleUrl: './console-footer.scss'
})
export class ConsoleFooter {
  date = new Date().getFullYear();
}
