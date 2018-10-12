import { Component, OnInit, HostListener } from '@angular/core';
@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.scss']
})
export class ChatFormComponent implements OnInit {
  field: any;
  quiz: any[] = [
    {
      number: 0,
      id: 1,
      question: 'Hello, Whats your name?',
      type: 'text',
      reply: null,
      comments: [
        'Cool name guy!'
      ]
    },
    {
      number: 1,
      id: 2,
      question: 'How many years do you have?',
      type: 'number',
      reply: null,
      comments: []
    },
    {
      number: 2,
      id: 3,
      question: 'Where do you from?',
      type: 'text',
      reply: null,
      comments: []
    },
    {
      number: 3,
      id: 4,
      question: 'Do you like a sanduiche?',
      type: 'text',
      reply: null,
      comments: []
    }
  ];
  constructor() {}

  ngOnInit() {}

  updateResp(question: any, value: any): void {
    console.log(question);
    console.log(value);
    this.quiz[question.number].reply = value;
    this.scrollDown();
  }

  @HostListener('document:keypress', ['$event'])
  public handleKeyboardEvent(): boolean {
    return true;
  }

  private scrollDown(): void {
    setTimeout(() => {
      document.getElementById('phone-screen').scrollTo(0, 2000);
    }, 300);
  }
}
