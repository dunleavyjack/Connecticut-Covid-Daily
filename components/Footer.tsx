import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Footer: React.FC = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../assets/footerDesign.png')}
            ></Image>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 45,
        backgroundColor: '#ffa726',
        width: '90%',
        height: 100,
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        height: 190,
        width: 310,
        zIndex: 100,
        bottom: 27,
    },
});

export default Footer;
