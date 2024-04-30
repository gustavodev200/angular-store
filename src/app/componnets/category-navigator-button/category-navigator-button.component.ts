import { Component, Input } from '@angular/core';
import { Category } from '../../interfaces/category.interface';

@Component({
  selector: 'app-category-navigator-button',
  templateUrl: './category-navigator-button.component.html',
  styleUrl: './category-navigator-button.component.css',
})
export class CategoryNavigatorButtonComponent {
  @Input() path: string | undefined = '';
  @Input() name: string = '';
  @Input() imageURL: string = '';
}
