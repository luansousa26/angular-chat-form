export class Age {
    private static agesArray = [
        {
            ages: [0, 1, 2, 3, 4],
            message: 'You really exist? rsrsrs. Or are you a Genius?. Like Sheldon Cooper!'
        },
        {
            ages: [5, 6, 7, 8, 9],
            message: 'You are so young, i hope you like cartoons :D. I love Samurai Jack!'
        },
        {
            ages: [10, 11, 12, 13, 14, 15, 16, 17],
            message: 'Wow, you are in youth. Do you prefer partys or series? or both? Im old for this.'
        },
        {
            ages: [18, 19, 20],
            message: 'You become a adult, do you have a car drive license?'
        },
        {
            ages: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
            message: 'Its time for choose some job area. Do you have someone? I will alert you, be a robot is no good.'
        },
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
