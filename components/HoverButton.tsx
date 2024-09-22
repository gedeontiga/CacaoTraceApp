import React, { useState } from 'react';
import { StyleSheet, Text, Pressable, Platform} from 'react-native';

export default function HoverButton ({text = "Hover Button"}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Pressable
            style={({ pressed }) => [
                styles.button,
                pressed && styles.pressed, // Effet lors de l'appui (touch)
                isHovered && styles.hovered, // Effet hover (web)
            ]}
            onPress={() => console.log('Button pressed')}
            onHoverIn={() => setIsHovered(true)}  // Utilisé pour le survol sur le web
            onHoverOut={() => setIsHovered(false)} // Utilisé pour quitter le survol sur le web
        >
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        marginTop: 15,
        backgroundColor: 'brown',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: Platform.OS === 'ios' ? 'San Francisco' : 'Roboto', // iOS uses SF, Android uses Roboto
    },
    hovered: {
        backgroundColor: 'transparent', // Couleur lors du hover (web)
        borderWidth: 1,
        borderBlockColor: 'brown',
    },
    pressed: {
        opacity: 0.8, // Effet d'opacité lors de l'appui (mobile)
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
