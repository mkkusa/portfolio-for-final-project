// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class QuizService {
//   private apiUrl = 'https://quizapi.io/api/v1/questions';
//   private apiKey = 'uAancKPYKiaV98WQiIGdUx3NuWogyB7ZyIurbQPy';

//   private correctAnswers = 0;
//   private totalQuestions = 0;

//   constructor(private http: HttpClient) { }

//   fetchQuestions(): Observable<any> {
//     const headers = { 'X-Api-Key': this.apiKey };
//     return this.http.get(this.apiUrl, { headers });
//   }

//   setQuizState(correctAnswers: number, totalQuestions: number): void {
//     console.log('Setting state in QuizService:', { correctAnswers, totalQuestions });
//     this.correctAnswers = correctAnswers;
//     this.totalQuestions = totalQuestions;
//   }

//   getQuizState(): { correctAnswers: number; totalQuestions: number } {
//     return {
//       correctAnswers: this.correctAnswers,
//       totalQuestions: this.totalQuestions,
//     };
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private apiUrl = 'http://localhost:3000/questions'; // JSON Server URL

  private correctAnswers = 0;
  private totalQuestions = 0;

  constructor(private http: HttpClient) { }

  // Fetch questions from the local JSON Server
  fetchQuestions(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Add a new question (POST)
  addQuestion(question: any): Observable<any> {
    return this.http.post(this.apiUrl, question);
  }

  // Update an existing question (PUT)
  updateQuestion(id: number, question: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, question);
  }

  setQuizState(correctAnswers: number, totalQuestions: number): void {
    this.correctAnswers = correctAnswers;
    this.totalQuestions = totalQuestions;
  }

  getQuizState(): { correctAnswers: number; totalQuestions: number } {
    return {
      correctAnswers: this.correctAnswers,
      totalQuestions: this.totalQuestions,
    };
  }
}






