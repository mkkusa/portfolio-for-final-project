import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterModule, AboutComponent, PortfolioComponent, ContactComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private cdr: ChangeDetectorRef) { }
  menuOpen = false;


  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.cdr.detectChanges();
  }

  refreshPage(event: Event): void {
    event.preventDefault();
    window.location.reload();
  }

}
