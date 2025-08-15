import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-outfit-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './outfit-select.component.html',
  styleUrls: ['./outfit-select.component.css'],
})
export class OutfitSelectComponent {
  images: string[] = [
    'assets/products-imgs/outfit.png',
    'assets/products-imgs/outfit-select-2.png',
  ];

  currentIndex = 0;
  incomingIndex = 0;
  isAnimating = false;
  direction: 'next' | 'prev' = 'next';
  animateOut = false;
  animateIn = false;

  next(): void {
    if (this.isAnimating) return;
    this.direction = 'next';
    this.startTransition((this.currentIndex + 1) % this.images.length);
  }

  prev(): void {
    if (this.isAnimating) return;
    this.direction = 'prev';
    this.startTransition(
      (this.currentIndex - 1 + this.images.length) % this.images.length
    );
  }

  private startTransition(targetIndex: number): void {
    this.isAnimating = true;
    this.incomingIndex = targetIndex;
    this.animateOut = true;
    this.animateIn = true;

    const D = 600;
    setTimeout(() => {
      this.currentIndex = this.incomingIndex;
      this.animateOut = false;
      this.animateIn = false;
      setTimeout(() => (this.isAnimating = false), 20);
    }, D);
  }
}
