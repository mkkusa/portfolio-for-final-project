
import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  questions: any[] = [];
  currentIndex = 0;
  currentQuestion: any = null;
  answers: any;
  correctAnswers: string[] = [];
  selectedAnswer: string | null = null; // To store the user's selected answer
  hasSubmitted = false; // To track submission state
  score = 0;

  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit(): void {
    this.quizService.fetchQuestions().subscribe(
      (data) => {
        console.log('Fetched questions:', data); // Debug log
        this.questions = data;
        this.loadQuestion();
      },
      (error) => {
        console.error('Error fetching questions:', error);
      }
    );
  }

  loadQuestion(): void {
    if (this.currentIndex < this.questions.length) {
      this.currentQuestion = this.questions[this.currentIndex];

      console.log('Loading question:', this.currentQuestion);

      // Extract non-null answers
      const rawAnswers = this.currentQuestion.answers;
      this.answers = Object.entries(rawAnswers)
        .filter(([key, value]) => value !== null) // Remove null answers
        .map(([key, value]) => ({ key, text: value }));

      // Extract correct answers
      const correctAnswersMap = this.currentQuestion.correct_answers;
      this.correctAnswers = Object.entries(correctAnswersMap)
        .filter(([key, value]) => value === 'true')
        .map(([key]) => key.replace('_correct', ''));

      this.selectedAnswer = null;
      this.hasSubmitted = false;
    } else {
      console.log('No more questions. Preparing to navigate to result page.');
      this.goToResultPage();
    }
  }

  selectAnswer(answerKey: string): void {
    this.selectedAnswer = answerKey;
  }

  nextQuestion(): void {
    this.currentIndex++;
    if (this.currentIndex < this.questions.length) {
      this.loadQuestion();
    } else {
      console.log('Quiz completed! Navigating to result page...');
      this.goToResultPage();
    }
  }

  goToResultPage(): void {
    console.log('Navigating to result page...');
    console.log('Score before saving:', this.score);
    console.log('Total questions before saving:', this.questions.length);

    // Save state to QuizService
    this.quizService.setQuizState(this.score, this.questions.length);

    // Log the saved state
    const savedState = this.quizService.getQuizState();
    console.log('State saved to QuizService:', savedState);

    // Navigate to result page
    this.router.navigate(['/game/result']);
  }

  submitAnswer(): void {
    if (this.selectedAnswer) {
      this.hasSubmitted = true;

      if (this.correctAnswers.includes(this.selectedAnswer)) {
        this.score++;
        console.log('Correct answer selected! Current score:', this.score);
      } else {
        console.log('Incorrect answer selected.');
      }
    }
  }








}


