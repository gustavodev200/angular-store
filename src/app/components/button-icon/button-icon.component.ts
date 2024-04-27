import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrl: './button-icon.component.css',
})
export class ButtonIconComponent {
  @Input('icon') iconUrl: string = '';
  @Input('alt') alt: string = '';
}
