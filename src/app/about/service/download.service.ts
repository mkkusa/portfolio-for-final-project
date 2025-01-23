import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor() { }

  downloadFromLink(url: string): void {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.download = 'CV';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


}
