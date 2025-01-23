import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
  constructor(private router: Router) { }

  startQuiz(): void {
    this.router.navigate(['start/question']);
  }
}
