export class Age {
    private static agesArray = [
        {
            ages: [0, 1, 2, 3, 4],
            message: 'You really exist? rsrsrs. Or are you a Genius?. Like Sheldon Cooper!',
            function: 'inRange'
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
        {
            ages: [31, 32, 33, 43, 35, 36, 37, 38, 39, 40],
            message: 'Do you have kids? I hope yes.'
        },
        {
            ages: [41, 42, 43, 44, 45, 46, 47, 48, 49, 60],
            message: 'You must be so wise, if do you have a time, i would like to learn with you!'
        },
        {
            ages: [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
            message: 'You must be SUPER wise, do you have a beard like Gandalf?'
        },
        {
            ages: [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
            message: 'You must be SUPER HIPER MAGUM wise, do you have a beard like Albus Dumbledore?'
        },
        {
            ages: [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
            message: 'You are in a advanced age, why do you learn in your entire life?'
        },
        {
            ages: [100],
            message: 'You are in 100 level!'
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
