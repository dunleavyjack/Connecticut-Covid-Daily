import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Appearance,
} from 'react-native';
import axios from 'axios';
import {
    getLastWeek,
    addCommas,
    getDifference,
    formatDate,
    getLastWeekDates,
} from '../utils/helperFunctions';
import PercentPositive from '../components/PercentPositive';
import LastUpdated from '../components/LastUpdated';
import WeeklyChart from '../components/WeeklyChart';
import DetailData from '../components/DetailData';
import Footer from '../components/Footer';

interface IState {
    lastUpdated: string;
    newCases: string;
    confirmed: string;
    probable: string;
    tests: string;
    percentDifference: string;
    percentPositive: string;
    weeklyPercentPositive: string[];
    weeklyLabels: string[];
}

const DisplayScreen: React.FC = () => {
    const [data, setData] = useState<IState>({
        lastUpdated: 'Loading',
        newCases: 'Loading',
        confirmed: 'Loading',
        probable: 'Loading',
        tests: 'Loading',
        percentDifference: '0.00',
        percentPositive: '0.00',
        weeklyPercentPositive: [''],
        weeklyLabels: [''],
    });

    useEffect(() => {
        axios
            .get('https://data.ct.gov/resource/rf3k-f8fg.json')
            .then((result) => {
                // Today's total = today's max - yesterday's max. (CT only gives an accumulating max total, updated each day)
                const increasedCases: number =
                    result.data[0]['totalcases'] - result.data[1]['totalcases'];
                const increasedConfirmed: number =
                    result.data[0]['confirmedcases'] -
                    result.data[1]['confirmedcases'];
                const increasedPositive: number =
                    result.data[0]['probablecases'] -
                    result.data[1]['probablecases'];
                const increasedTests: number =
                    result.data[0]['covid_19_tests_reported'] -
                    result.data[1]['covid_19_tests_reported'];

                const weeklyPercentPositive: string[] = getLastWeek(
                    result.data
                );
                const formattedDate: string = formatDate(
                    result.data[0]['date']
                );

                setData({
                    lastUpdated: formattedDate,
                    newCases: addCommas(increasedCases),
                    confirmed: addCommas(increasedConfirmed),
                    probable: addCommas(increasedPositive),
                    tests: addCommas(increasedTests),
                    percentDifference: getDifference(
                        weeklyPercentPositive[4],
                        weeklyPercentPositive[3]
                    ),
                    percentPositive: weeklyPercentPositive[4],
                    weeklyPercentPositive: weeklyPercentPositive,
                    weeklyLabels: getLastWeekDates(result.data),
                });
            });
    }, []);

    return (
        <SafeAreaView style={styles.main}>
            <ScrollView>
                <View style={styles.container}>
                    <LastUpdated lastUpdated={data.lastUpdated} />
                    <PercentPositive
                        percentPositive={data.percentPositive}
                        percentDifference={data.percentDifference}
                    />
                    <WeeklyChart
                        labels={data.weeklyLabels}
                        chartData={data.weeklyPercentPositive}
                    />
                    <View style={styles.dataRow}>
                        <DetailData data={data.newCases} label={'New Cases'} />
                        <DetailData data={'33.5k'} label={'Tests'} />
                    </View>
                    <View style={styles.dataRow}>
                        <DetailData data={data.probable} label={'Probable'} />
                        <DetailData data={data.confirmed} label={'Confirmed'} />
                    </View>
                    <Footer />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const colorScheme = Appearance.getColorScheme();

const styles = StyleSheet.create({
    main: {
        backgroundColor: colorScheme === 'dark' ? 'black' : 'white',
    },
    container: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    dataRow: {
        display: 'flex',
        flexDirection: 'row',
    },
});

export default DisplayScreen;
