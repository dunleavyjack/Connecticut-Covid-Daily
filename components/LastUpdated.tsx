import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface IProps {
    lastUpdated: string;
}

const LastUpdated: React.FC<IProps> = ({ lastUpdated }) => {
    return (
        <View style={styles.updateContainer}>
            <View style={styles.text}>
                <Text style={styles.upperText}>{lastUpdated}</Text>
                <Text style={styles.lowerText}>Updated weekdays, 3PM</Text>
            </View>
            <Image
                style={styles.image}
                source={require('../assets/doctor.png')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    updateContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 10,
        width: '90%',
        backgroundColor: '#ffa726',
        height: 100,
        borderRadius: 20,
    },
    text: {
        justifyContent: 'flex-start',
        width: 210,
    },
    upperText: {
        fontWeight: 'bold',
        fontSize: 40,
        color: '#13233C',
        textAlign: 'left',
    },
    lowerText: {
        color: '#13233C',
        fontSize: 18,
    },
    image: {
        width: 75,
        height: 120,
        bottom: 15,
    },
});

export default LastUpdated;
