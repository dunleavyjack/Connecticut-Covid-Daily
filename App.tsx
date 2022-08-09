import React, { useState, useCallback } from 'react';
import {
    RefreshControl,
    SafeAreaView,
    ScrollView,
    Appearance,
    StyleSheet,
} from 'react-native';
import DisplayScreen from './screens/DisplayScreen';

const colorScheme = Appearance.getColorScheme();

const wait = (timeout: any) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function App() {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(1500).then(() => setRefreshing(false));
    }, []);

    return (
        <SafeAreaView style={styles.main}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <DisplayScreen />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: colorScheme === 'dark' ? 'black' : 'white',
    },
});
