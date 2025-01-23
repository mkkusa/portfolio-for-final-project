import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],

})
export class ContactComponent {

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  emailIsSent = false;
  isFirstPage: boolean = true;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosotion = window.scrollY || document.documentElement.scrollTop;
    this.isFirstPage = scrollPosotion < window.innerHeight;
  }

  formGroup = this.fb.group({
    name: [''],
    email: ['', [Validators.required, Validators.email]],
    subject: [''],
    message: ['', Validators.required],
  });


  send(event: Event) {
    event.preventDefault();
    if (this.formGroup.invalid) {
      return;
    }
    this.http
      .post(
        'https://formsubmit.co/ajax/makomestumrishvili@gmail.com',
        this.formGroup.getRawValue()
      )
      .subscribe(() => {
        this.emailIsSent = true;
        this.formGroup.reset({
          name: '',
          email: '',
          subject: '',
          message: '',
        });

        setTimeout(() => this.emailIsSent = false, 2000);
      });
  }

}
