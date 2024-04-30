import { Component } from '@angular/core';
import { Category } from '../../interfaces/category.interface';
import { CategoriesData } from '../../services/categories-data';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {
  categoriesData: Category[] = CategoriesData;
}
