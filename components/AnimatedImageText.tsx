import React, { useEffect, useRef } from "react";
import { Animated, View, Text, Image, StyleSheet, Platform } from "react-native";
import GradientText from "./GradientText";
import HoverButton from "./HoverButton";

const AnimatedImageText = () => {
  const firstLineAnim = useRef(new Animated.Value(0)).current;
  const secondLineAnim = useRef(new Animated.Value(0)).current;
  const thirdLineAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const firstLineAnimation = Animated.timing(firstLineAnim, {
      toValue: 1,
      duration: 2000,
      delay: 300,
      useNativeDriver: true,
    });
    const secondLineAnimation = Animated.spring(secondLineAnim, {
      toValue: 1,
      friction: 0.1,
      tension: 2,
      delay: 2000,
      useNativeDriver: true,
    });
    const thirdLineAnimation = Animated.timing(thirdLineAnim, {
      toValue: 1,
      duration: 2000,
      delay: 4000,
      useNativeDriver: true,
    });

    Animated.parallel([
      firstLineAnimation,
      secondLineAnimation,
      thirdLineAnimation,
    ]).start();
  }, [firstLineAnim, secondLineAnim, thirdLineAnim]);

  const firstLineStyle = {
    opacity: firstLineAnim,
  };

  const secondLineStyle = {
    opacity: secondLineAnim,
    transform: [
      {
        scale: secondLineAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0.5, 1],
        }),
      },
    ],
  };

  const thirdLineStyle = {
    opacity: thirdLineAnim,
  };

  return (
    <View style={styles.container}>
      {/* Use local or online GIF */}
      <Image
        source={require('../assets/images/cacao-trace-home-logo.gif')}
        style={styles.image}
      />
      <Animated.View style={[styles.textContainer, firstLineStyle]}>
        <Text>
          <GradientText
            text="Welcome in"
            fontSize={30}
            colors={["brown", "black"]}
          />
        </Text>
      </Animated.View>
      <Animated.View style={[styles.textContainer, secondLineStyle]}>
        <Text>
          <GradientText
            text="Cacao"
            fontSize={40}
            colors={["#bc8579", "brown"]}
          />
          <GradientText
            text="Trace"
            fontSize={40}
            colors={["#bc8579", "black"]}
          />
        </Text>
      </Animated.View>
      <Animated.View style={[styles.textContainer, thirdLineStyle]}>
        <Text>
          <GradientText
            text="Application"
            fontSize={30}
            colors={["black", "brown"]}
          />
        </Text>
      </Animated.View>
      <HoverButton text="Start" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ccc8d3",
    flex: 1,
    width: "100%",
  },
  image: {
    width: 250,
    height: 250,
  },
  textContainer: {
    marginVertical: 10,
  },
});

export default AnimatedImageText;
