import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  intervalId!: any;
  transitioning = false;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  slides = [
    { image: '/assets/images/smart.png', title: 'SmartItup', link: 'https://www.smartitup.ge' },
    { image: '/assets/images/atic.png', title: 'ATIC', link: 'https://www.atic.ge' },
    { image: '/assets/images/bms.png', title: 'BMS', link: 'https://www.bmsapplications.com' },
  ];

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  stopAutoSlide(): void {
    clearInterval(this.intervalId);
  }

  nextSlide(): void {
    if (this.transitioning) return;

    this.transitioning = true;
    this.currentIndex++;

    setTimeout(() => {
      if (this.currentIndex === this.slides.length) {
        this.transitioning = false;
        this.currentIndex = 0;
      } else {
        this.transitioning = false;
      }
    }, 500);
  }

  prevSlide(): void {
    if (this.transitioning) return;
    this.transitioning = true;
    this.currentIndex--;

    setTimeout(() => {
      if (this.currentIndex < 0) {
        this.transitioning = false;
        this.currentIndex = this.slides.length - 1;
      } else {
        this.transitioning = false;
      }
    }, 500);
  }

}









