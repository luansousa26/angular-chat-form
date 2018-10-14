import { Question } from '../models/questions.model';

export class Questions {
  /*
    File to include all questions
    */
  public static questions: Question[] = [
    {
      number: 0,
      id: 1,
      question: 'Hello, Whats your name?',
      type: 'text',
      reply: null,
      formName: 'name',
      comments: null,
      response: 'name',
    },
    {
      number: 1,
      id: 2,
      question: 'How many years do you have?',
      type: 'number',
      reply: null,
      formName: 'age',
      comments: null,
      response: 'age',
    },
    {
      number: 2,
      id: 3,
      question: 'What is your gender?',
      type: 'gender',
      reply: null,
      formName: 'gender',
      comments: null,
      response: 'gender',
    },
    {
      number: 3,
      id: 4,
      question: 'Where you from?',
      type: 'text',
      reply: null,
      formName: 'country',
      comments: null,
      response: 'country',
    },
    {
      number: 4,
      id: 5,
      question: 'Do you like a sanduiche?',
      type: 'text',
      reply: null,
      formName: 'sanduiche',
      comments: null,
      response: null,
    },
    {
      number: 5,
      id: 6,
      question: 'What is your profession?',
      type: 'text',
      reply: null,
      formName: 'profession',
      comments: null,
      response: 'profession',
    },
    {
      number: 6,
      id: 7,
      question: 'What Programming Language do you prefer?',
      type: 'text',
      reply: null,
      formName: 'programmingLang',
      comments: 'I preffer BIRL LANGUAGE rsrsrsrrsr!',
      response: null,
    },
    {
      number: 7,
      id: 8,
      question: 'You watch Game Of Thrones?',
      type: 'text',
      reply: null,
      formName: 'wathGame',
      comments: 'I love Sansa Stark!',
      response: null,
    }
  ];
}
