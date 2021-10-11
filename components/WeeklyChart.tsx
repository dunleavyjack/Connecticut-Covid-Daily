import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

interface IProps {
    labels: string[];
    chartData: string[];
}

const WeeklyChart: React.FC<IProps> = ({ labels, chartData }) => {
    const chartDataInt: number[] = chartData.map(Number);

    return (
        <View>
            <LineChart
                data={{
                    labels: labels,
                    datasets: [
                        {
                            data: chartDataInt,
                        },
                    ],
                }}
                width={Dimensions.get('window').width * 0.9} // from react-native
                withInnerLines={true}
                height={200}
                yAxisSuffix="%"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: '#FEC122',
                    backgroundGradientFrom: '#fb8c00',
                    backgroundGradientTo: '#ffa726',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) =>
                        `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                    propsForDots: {
                        r: '6',
                        strokeWidth: '2',
                        stroke: '#ffa726',
                    },
                }}
                bezier
                style={{
                    marginVertical: 10,
                    borderRadius: 20,
                }}
            />
        </View>
    );
};

export default WeeklyChart;
