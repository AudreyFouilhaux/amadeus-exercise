// ******************** Test file ******************** //

/** Use JEST for testing
* {@link https://jestjs.io/docs/getting-started | Jest documentation}
*/

// Import the class component
import AdvertisingComponent from "./amadeus-exercise";

// Instantiate class to access method
const advertising = new AdvertisingComponent();

describe('Tests for viralAdvertising method', () => {
    test('should return 0 cumulative like at day 0', () => {
        expect(advertising.viralAdvertising(0)).toBe(0);
    });
    test('should return 2 cumulative likes at day 1', () => {
        expect(advertising.viralAdvertising(1)).toBe(2);
    });
    test('should return 5 cumulative likes at day 2', () => {
        expect(advertising.viralAdvertising(2)).toBe(5);
    });
    test('should return 9 cumulative likes at day 3', () => {
        expect(advertising.viralAdvertising(3)).toBe(9);
    });
    test('should return 15 cumulative likes at day 4', () => {
        expect(advertising.viralAdvertising(4)).toBe(15);
    });
    test('should return 24 cumulative likes at day 5', () => {
        expect(advertising.viralAdvertising(5)).toBe(24);
    });
});


describe('Tests for requiredMinimumDays method', () => {
    test('should return 0 day to reach 0 cumulative like', () => {
        expect(advertising.requiredMinimumDays(0)).toBe(0);
    });
    test('should return 2 days to reach 4 cumulative likes', () => {
        expect(advertising.requiredMinimumDays(4)).toBe(2);
    });
    test('should return 4 days to reach 15 cumulative likes', () => {
        expect(advertising.requiredMinimumDays(15)).toBe(4);
    });
    test('should return 5 days to reach 22 cumulative likes', () => {
        expect(advertising.requiredMinimumDays(22)).toBe(5);
    });
});