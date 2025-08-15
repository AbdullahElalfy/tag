import { Component } from '@angular/core';
import { CategoryComponent } from '../../home-sections/category/category.component';
import { BannerComponent } from '../../home-sections/banner/banner.component';
import { TrendingComponent } from '../../home-sections/trending/trending.component';
import { OutfitSelectComponent } from '../../home-sections/outfit-select/outfit-select.component';
import { ProprtiesComponent } from '../../home-sections/proprties/proprties.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CategoryComponent,
    BannerComponent,
    TrendingComponent,
    OutfitSelectComponent,
    ProprtiesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
