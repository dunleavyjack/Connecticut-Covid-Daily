import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface IProps {
    lastUpdated: string;
}

const LastUpdated: React.FC<IProps> = ({ lastUpdated }) => {
    return (
        <View style={styles.updateContainer}>
            <Text style={styles.upperText}>{lastUpdated}</Text>
            <Text style={styles.lowerText}>
                Results are available weekdays after 3pm
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    updateContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 25,
    },
    upperText: {
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 5,
    },
    lowerText: {
        color: 'gray',
    },
});

export default LastUpdated;
