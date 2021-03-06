import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface IProps {
    data: string;
    label: string;
}

const DetailData: React.FC<IProps> = ({ data, label }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.upperText}>{data}</Text>
            <Text style={styles.bottomText}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 180,
        backgroundColor: '#13233C',
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    upperText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 40,
    },
    bottomText: {
        color: '#ffffff',
        fontSize: 18,
        flexWrap: 'wrap',
        width: 100,
        textAlign: 'center',
    },
});

export default DetailData;
