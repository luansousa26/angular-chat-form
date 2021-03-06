import { Countries } from './intelligence/countries';
import { Component, OnInit, HostListener } from '@angular/core';
import { Questions } from './configuration/questions';
import { Age } from './intelligence/age';
import { Names } from './intelligence/name';
import { Professions } from 'src/app/chat-form/intelligence/profession';
@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.scss']
})
export class ChatFormComponent implements OnInit {

  /*
  ANGULAR CHAT FORM
    My Idea for this project is create a cool and dynamic FORM
    @Author: Luan Sousa
  */

  quiz = Questions.questions; // All questions
  typingTimer: any; // control the time that user don't type.
  typingAlert = 'User is typing...'; // alert message.
  responseArray: any[] = []; // Array for response
  isWoman: boolean; // verify if is needed change the user picture.
  photoUser = 'assets/pics/dog.jpeg'; // user picture
  constructor() {}

  ngOnInit() { }

  public updateResp(question: any, value: any): void {
    // /\S/ verify if the string has characters.
    if (/\S/.test(value)) {
      this.quiz[question.number].reply = value;
      // Ternary  for verify if the verifyResponse return null
      this.quiz[question.number].comments = this.verifyResponse(
        this.quiz[question.number].response,
        value
      )
        ? this.verifyResponse(this.quiz[question.number].response, value)
        : this.quiz[question.number].comments;
      this.scrollDown();
    }
  }

  // Listen when the user press some key.
  @HostListener('document:keydown', ['$event'])
  public handleKeyboardEvent() {
    clearTimeout(this.typingTimer);
    this.typingAlert = 'User is typing...';
  }

  // Listen when the user press out some key.

  @HostListener('document:keyup', ['$event'])
  public handleKeyUp() {
    clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(() => {
      this.typingAlert = '...';
    }, 3000);
  }

  // Scroll down after a anwser.
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
      this.responseArray.push({ [qz.formName]: qz.reply });
    });
  }

  // restart the form
  public undoForm(): void {
    location.reload();
  }

  // verify the answer
  public verifyResponse(response: string, value: any): string {
    switch (response) {
      case 'age':
        return Age.verifyAge(Number.parseInt(value));
      case 'country':
        return Countries.verifyCountries(value);
      case 'name':
        return Names.verifyName(value);
      case 'gender':
        if (value === 'Feminine') {
          this.isWoman = true;
          this.photoUser = 'assets/pics/woman.png';
        }
        break;
      case 'profession':
        return Professions.verifyProfession(value);
    }
    return null;
  }
}
