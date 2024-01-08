// ******************** Method file ******************** //

export default class AdvertisingComponent {


    /**
     * Determine how many people have liked the ad by the end of a given day
     * @param {number} n - the day number to report
     * @returns {number} - the cumulative likes at that day
     */
    public viralAdvertising(n: number): number {
        if(n > 0) {
            
            // Set number of people who received the ad on the given day
            // At launch (day 1): 5 people receive the ad
            let shared: number = 5;
    
            // Set number of people who liked the ad in total since the 1st day
            let cumulativeLikes: number = 0;
    
            // Loop starting from day 1 until day n
            for (let day = 1; day <= n; day++) {
                const result: { liked: number, sharedNextDay: number } = this.calculateLikedAndShared(shared);
                // Add likes to total likes
                cumulativeLikes += result.liked;
                shared = result.sharedNextDay;
            }
    
            return cumulativeLikes;

        } else {

            return 0;
        }
    }


    /**
     * Determine how many days are needed to reach a certain number of people having liked the ad
     * @param {number} n - the number of likes to reach
     * @returns {number} - the minimum number of days to reach that objective
     */
    public requiredMinimumDays(n: number): number {
        if(n > 0) {

            // Set number of days: incremented in loop until likes reaches objective
            let days: number = 0;
      
            // Set number of people who received the ad on the given day
            // At launch (day 1): 5 people receive the ad
            let shared: number = 5;

            // Set number of likes: incremented in loop by the previous viralAdvertising method
            let cumulativeLikes: number = 0;

            while (cumulativeLikes < n) {
                // Add 1 day
                days ++;
                const result: { liked: number, sharedNextDay: number } = this.calculateLikedAndShared(shared);
                // Add likes to total likes
                cumulativeLikes += result.liked;
                shared = result.sharedNextDay;
            }

            return days;

        } else {

            return 0;
        }
    }


   /**
     * Get value of likes of the day and number of people who receive the ad the next day
     * @param {number} shared - the number of people who received the ad on the current day
     * @returns {{ liked: number, sharedNextDay: number }} - an object containing the likes of the day (liked)
     *          and the number of people who receive the ad on the next day (sharedNextDay)
     */
    public calculateLikedAndShared(shared: number): { liked: number, sharedNextDay: number }  {
            // Half like the ad
            const liked: number = Math.floor(shared / 2);
            // On the next day: each of the people who liked send it to 3 people
            const sharedNextDay: number = liked * 3;

            return { liked, sharedNextDay }
    }
  
}