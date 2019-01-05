import { EqualityVerification } from './name-equality-verification';

export class Names {
  public static names = [
    { name: 'luan', message: 'Cool name guy, do you like Luan Santana?' },
    { name: 'eric', message: 'Wow your name can mean the lonely king.' },
    {
      name: 'erik',
      message: 'Wow your name can mean the king that rules forever.'
    },
    {
      name: 'helena',
      message: 'wow your name can mean the sunshine. I really love this name.'
    },
    {
      name: 'jean',
      message: 'wow your name can mean the blessed for god.'
    },
    {
      name: 'nice',
      message: 'wow your name can mean the winner.'
    },
    {
      name: 'renan',
      message: 'wow your name can mean the mysterious.'
    },
    {
      name: 'jessica',
      message: 'wow your name can mean the observer.'
    },
    {
      name: 'lucas',
      message: 'wow your name can mean the brighter.'
    },
    {
      name: 'dion',
      message: 'wow your name its like Jhon Lenon, are you a fake??? kkkk.'
    },
    {
      name: 'jon',
      message: 'Are you the truly king of Westeros?'
    },
    {
      name: 'sansa',
      message: 'Are you the lady of Winterfell?'
    },
    {
      name: 'arya',
      message: 'That lovely name, Arya Stark is the best!'
    },
    {
      name: 'meliodas',
      message: 'I love nanatsu no Taizai.'
    },
    {
      name: 'carlos',
      message: 'Wow your name means strong.'
    },
    {
      name: 'elizabeth',
      message: 'blimey please, like queen name.'
    },
    {
      name: 'elizabete',
      message: 'blimey please, like queen name.'
    },
    {
      name: 'akihito',
      message: 'blimey please, like Japan emperor name.'
    },
    {
      name: 'jair',
      message: 'President Jair Bolsonaro?'
    }
  ];

  public static verifyName(value: string): string {
    return EqualityVerification.verifyNameEquality(this.names, value);
  }
}
