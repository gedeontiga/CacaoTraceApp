import React from 'react';
import Svg, { Defs, LinearGradient, Stop, Text as SvgText } from 'react-native-svg';

interface GradientTextProps {
    text?: string;
    fontSize?: number;
    colors?: string[];
}

const GradientText: React.FC<GradientTextProps> = ({ text = "Gradient Text", fontSize = 40, colors = ['red', 'blue'] }) => {
    // Estimate character width (approximation)
    const characterWidth = fontSize * 0.6; // Adjust this factor if needed
    const textWidth = characterWidth * text.length; // Total width based on text length

    // Generate a unique id for the LinearGradient
    const gradientId = `gradient-${text.replace(/\s+/g, '-')}`;

    return (
        <Svg height={fontSize * 1.2} width={textWidth}>
            <Defs>
                <LinearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="100%">
                    <Stop offset="0%" stopColor={colors[0]} stopOpacity="1" />
                    <Stop offset="100%" stopColor={colors[1]} stopOpacity="1" />
                </LinearGradient>
            </Defs>
            <SvgText
                fill={`url(#${gradientId})`}
                fontSize={fontSize}
                fontWeight="bold"
                x={textWidth / 2}  // Centering the text horizontally
                y={fontSize * 0.8}  // Adjusting vertical position based on font size
                textAnchor="middle"  // Centering the text
            >
                {text}
            </SvgText>
        </Svg>
    );
};

export default GradientText;