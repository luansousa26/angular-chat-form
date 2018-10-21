export class Age {
    private static agesArray = [
        {
            ages: [0, 1, 2, 3, 4],
            message: 'You really exist? rsrsrs. Or are you a Genius?'
        },
        {
            ages: [5, 6, 7, 8, 9],
            message: 'You are so young, i hope you like cartoons :D. I love Samurai Jack!'
        }
    ];

    public static verifyAge(age: number): string {
        /*
        Verify if the ages contains 'age' and return to comment the message in array
        if age dont exist return another message
        */
        return this.agesArray.find(agesFind => agesFind.ages.includes(age))
            ? this.agesArray.find(agesFind => agesFind.ages.includes(age)).message : 'Are you a immortal? Please teach me the secret!!!';
    }
}
