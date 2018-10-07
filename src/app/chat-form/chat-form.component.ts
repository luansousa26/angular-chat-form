import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.scss']
})
export class ChatFormComponent implements OnInit {

  quiz: any[] = [
    { id: 1, question: 'Hello, Whats your name?', type: 'text', reply: 'Hi my name is luan', comments: [] },
    { id: 2, question: 'How many years do you have?', type: 'text', reply: '23 years', comments: [] }
  ];
  constructor() { }

  ngOnInit() {
  }

}
