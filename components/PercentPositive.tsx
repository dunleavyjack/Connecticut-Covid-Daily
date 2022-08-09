import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface IProps {
    percentPositive: string;
    percentDifference: string;
}

const PercentPositive: React.FC<IProps> = ({
    percentPositive,
    percentDifference,
}) => {
    // Find if change is poistive or negative
    return (
        <View style={styles.infoContainer}>
            <View style={styles.displayRow}>
                <Text style={styles.largeNumberDisplay}>{percentPositive}</Text>
                <View style={styles.rightAside}>
                    <Image
                        style={
                            percentDifference[0] === '-'
                                ? styles.polygonDown
                                : styles.polygonUp
                        }
                        source={require('../assets/polygon.png')}
                    />
                    <Text style={styles.smallNumberDisplay}>
                        {percentDifference.replace('-', '')}
                    </Text>
                </View>
            </View>
            <Text style={styles.bottomText}>Percent of Positive Tests</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    infoContainer: {
        backgroundColor: '#13233C',
        width: '90%',
        height: 180,
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    displayRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    largeNumberDisplay: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 85,
    },
    smallNumberDisplay: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 3,
    },
    rightAside: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        marginLeft: 20,
    },
    polygonUp: {
        width: 12,
        height: 10,
    },
    polygonDown: {
        width: 12,
        height: 10,
        transform: [{ rotate: '180deg' }],
    },
    bottomText: {
        color: '#ffffff',
        fontSize: 18,
    },
});

export default PercentPositive;
