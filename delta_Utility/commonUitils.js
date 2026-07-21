export default class CommonUtils {

    // Generate random number
    static getRandomNumber(max = 10000) {
        return Math.floor(Math.random() * max);
    }

}