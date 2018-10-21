export class Countries {
    public static countries = [
        { name: 'brazil', message: 'I love Brazil, its my origin country.' },
        { name: 'paraguay', message: 'Paraguay is a good place to buy things :D.' },
        { name: 'argentina', message: 'Quiero conocer argentina Buenos Aires.' },
        { name: 'colombia', message: 'Colombia its a good place. Some day i will meet Bogotá!' },
        { name: 'japan', message: 'I LOVE JAPAN, the culture and mangas \0/. mo shindeiru naniiii' },
        { name: 'china', message: 'Some day i will live in China and learn Shaolin Kung-fu!' },
    ];

    public static verifyCountries(country: string): string {
        return this.countries.find(cr => country.toLowerCase().includes(cr.name)) ?
            this.countries.find(cr => country.toLowerCase().includes(cr.name)).message : null;
    }
}
