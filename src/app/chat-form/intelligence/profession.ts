import { EqualityVerification } from "src/app/chat-form/intelligence/name-equality-verification";

export class Professions {
  public static professions = [
    { name: 'developer', message: 'Are you my dad?' },
    { name: 'engineer', message: 'You make buildings?' },
    { name: 'helper', message: 'Cool profession.' },
    { name: 'businessman', message: 'What is you actuation area?' },
    { name: 'support analyst', message: 'Cool, you like of callings?' },
  ];

  public static verifyProfession(profession: string): string {
    return EqualityVerification.verifyNameEquality(this.professions, profession);
  }
}
