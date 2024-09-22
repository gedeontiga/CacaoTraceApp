// File: index.tsx or App.tsx

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AnimatedImageText from '../components/AnimatedImageText';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <AnimatedImageText />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;
