import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadService } from './service/download.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(private downloadService: DownloadService) { }


  downloadCV(): void {
    const driveLink = 'https://drive.google.com/uc?id=13hUkKXyQyWPK4a4D7EoUtsB5TzVMiR23&export=download';
    this.downloadService.downloadFromLink(driveLink)
  }

  skills = [
    { name: 'HTML 5', percentage: 80 },
    { name: 'CSS 3, SASS', percentage: 80 },
    { name: 'Javascript, Typescript', percentage: 70 },
    { name: 'Angular (14+)', percentage: 60 },
    { name: 'Responsive web design', percentage: 70 },
    { name: 'Git Version Control', percentage: 60 },
  ];

}
