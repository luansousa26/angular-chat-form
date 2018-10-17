import { Component, OnInit, HostListener } from '@angular/core';
import { Questions } from './configuration/questions';
@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.scss']
})
export class ChatFormComponent implements OnInit {
  field: any;
  quiz = Questions.questions; // All questions
  typingTimer: any; // control the time that user don't type.
  typingAlert = 'User is typing...'; // alert message.

  constructor() { }

  ngOnInit() { }

  updateResp(question: any, value: any): void {
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
}
