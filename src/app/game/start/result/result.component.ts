// import { Component, NgModule, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { QuizService } from '../question/quiz.service';


// @Component({
//   selector: 'app-result',
//   standalone: true,
//   imports: [],
//   templateUrl: './result.component.html',
//   styleUrls: ['./result.component.css'],
// })
// export class ResultComponent implements OnInit {
//   correctAnswers = 0;
//   totalQuestions = 0;
//   incorrectAnswers = 0;

//   constructor(private quizService: QuizService, private router: Router) { }

//   ngOnInit(): void {
//     const state = this.quizService.getQuizState();
//     console.log('Loaded state from QuizService in ResultComponent:', state);

//     this.correctAnswers = state.correctAnswers;
//     this.totalQuestions = state.totalQuestions;
//     this.incorrectAnswers = this.totalQuestions - this.correctAnswers;

//     console.log('Final result state:', {
//       correctAnswers: this.correctAnswers,
//       totalQuestions: this.totalQuestions,
//       incorrectAnswers: this.incorrectAnswers,
//     });
//   }

//   restartQuiz(): void {
//     this.router.navigate(['/game/start']);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../question/quiz.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  correctAnswers = 0;
  totalQuestions = 0;
  incorrectAnswers = 0;

  // New question model
  newQuestion = {
    question: '',
    answers: {
      answer_a: '',
      answer_b: '',
      answer_c: '',
      answer_d: '',
    },
  };

  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit(): void {
    const state = this.quizService.getQuizState();

    this.correctAnswers = state.correctAnswers;
    this.totalQuestions = state.totalQuestions;
    this.incorrectAnswers = this.totalQuestions - this.correctAnswers;
  }

  restartQuiz(): void {
    this.router.navigate(['/game/start']);
  }

  addQuestion(): void {
    this.quizService.addQuestion(this.newQuestion).subscribe((response) => {
      console.log('New question added:', response);
      alert('Question added successfully!');
      this.newQuestion = {
        question: '',
        answers: {
          answer_a: '',
          answer_b: '',
          answer_c: '',
          answer_d: '',
        },
      };
    });
  }
}



