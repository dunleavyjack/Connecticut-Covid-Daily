import dayjs from 'dayjs';
const advancedFormat = require('dayjs/plugin/advancedFormat');
dayjs.extend(advancedFormat);

export const addCommas = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const getPercentPositive = (
    increasedTests: number,
    increasedCases: number
): string => {
    let result = (increasedCases / increasedTests) * 100;
    return result.toFixed(2);
};

export const getDifference = (valueOne: string, valueTwo: string): string => {
    let result: string = (parseFloat(valueOne) - parseFloat(valueTwo))
        // Round to nearest 2 decimals
        .toFixed(2);
    return result;
};

export const getLastWeek = (data: any): string[] => {
    let weeklyPercentPositive: string[] = [];
    for (let i = 0; i < 5; i++) {
        let increasedDailyCases =
            data[i]['totalcases'] - data[i + 1]['totalcases'];
        let increasedDailyTests =
            data[i]['covid_19_tests_reported'] -
            data[i + 1]['covid_19_tests_reported'];

        let dailyChange = getPercentPositive(
            increasedDailyTests,
            increasedDailyCases
        );
        weeklyPercentPositive.push(dailyChange);
    }
    return weeklyPercentPositive.reverse();
};

export const formatDate = (date: string): string => {
    return dayjs(date).format('MMM Do');
};

export const formatDateTwo = (date: string): string => {
    return dayjs(date).format('ddd D');
};

export const getLastWeekDates = (data: any): string[] => {
    let weeklyDates: string[] = [];
    for (let i = 0; i < 5; i++) {
        weeklyDates.push(formatDateTwo(data[i]['date']));
    }
    return weeklyDates.reverse();
};
