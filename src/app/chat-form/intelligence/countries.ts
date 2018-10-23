import { EqualityVerification } from './name-equality-verification';

export class Countries {
  public static countries = [
    { name: 'brazil', message: 'I love Brazil, its my origin country.' },
    { name: 'paraguay', message: 'Paraguay is a good place to buy things :D.' },
    { name: 'argentina', message: 'Quiero conocer argentina Buenos Aires.' },
    {
      name: 'colombia',
      message: 'Colombia its a good place. Some day i will meet Bogotá!'
    },
    {
      name: 'japan',
      message: 'I LOVE JAPAN, the culture and mangas. mo shindeiru.. naniiii?'
    },
    {
      name: 'china',
      message: 'Some day i will live in China and learn Shaolin Kung-fu!'
    },
    { name: 'north korea', message: 'Pyongyang seems be beautiful.' },
    { name: 'south korea', message: 'I would like learn k-pop.' },
    { name: 'spain', message: 'PLUSSSSSSSS ULTRAAAAAAAA!!' },
    {
      name: 'united kingdom',
      message: 'Londres its so perfect, a kingdom sounds good.'
    },
    { name: 'narnia', message: 'WOW ASLAN!!' },
    {
      name: 'winterfell',
      message: 'The lone wolf dies but the pack survives!'
    },
    { name: "konoha", message: "Jiraya for Hokage!" },
    { name: "russia", message: "I think that Russia its really cold!" },
    { name: "asgard", message: "Do you meet Odin" }
  ];

  public static verifyCountries(country: string): string {
    return EqualityVerification.verifyNameEquality(this.countries, country);
  }
}
