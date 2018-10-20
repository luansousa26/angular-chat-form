import { Component, OnInit, HostListener } from '@angular/core';
import { Questions } from './configuration/questions';
@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.scss']
})
export class ChatFormComponent implements OnInit {

  /* ANGULAR CHAT FORM
    My Idea for this project is create a cool and dinamic FORM
    @Author: Luan Sousa
  */
  quiz = Questions.questions; // All questions
  typingTimer: any; // control the time that user don't type.
  typingAlert = 'User is typing...'; // alert message.
  responseArray: any[] = []; // Array for response
  constructor() {}

  ngOnInit() {}

 public updateResp(question: any, value: any): void {
    // /\S/ verify if the string has characters.
    if (/\S/.test(value)) {
      this.quiz[question.number].reply = value;
      this.scrollDown();
    }
  }

  // Listen when the user press a key.

  @HostListener('document:keydown', ['$event'])
  public handleKeyboardEvent() {
    clearTimeout(this.typingTimer);
    this.typingAlert = 'User is typing...';
  }

  // Listen when the user press out a key.

  @HostListener('document:keyup', ['$event'])
  public handleKeyUp() {
    clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(() => {
      this.typingAlert = '...';
    }, 3000);
  }

  // Scroll down before a anwser.
  private scrollDown(): void {
    setTimeout(() => {
      document.getElementById('phone-screen').scrollTo(0, 2000);
    }, 300);
  }

  // get form data
  public onSubmit(): void {
    console.log(this.questionsAndAnswers());
  }

  // create a response array
  private questionsAndAnswers(): void {
    this.responseArray = [];
    this.quiz.map(qz => {
      this.responseArray.push({[qz.formName]: qz.reply });
    });
  }
  public undoForm(): void {
      location.reload();
  }
}
