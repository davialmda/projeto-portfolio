import { useEffect, useRef } from "react";
import { Animated, ImageSourcePropType, StyleSheet } from "react-native";

const imagens: Record<number, ImageSourcePropType> = {
  1: require("../../assets/images/1.png"),
  2: require("../../assets/images/2.png"),
  3: require("../../assets/images/3.png"),
  4: require("../../assets/images/4.png"),
  5: require("../../assets/images/5.png"),
  6: require("../../assets/images/6.png"),
};

type Props = {
  valor: number;
  tamanho?: number;
};

export default function Dado({ valor, tamanho = 70 }: Props) {
  const anim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    anim.setValue(0);
    Animated.spring(anim, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();
  }, [valor, anim]);

  const scale = anim.interpolate({ inputRange: [0, 1], outputRange: [0.5, 1] });
  const rotate = anim.interpolate({ inputRange: [0, 1], outputRange: ["-180deg", "0deg"] });

  return (
    <Animated.Image
      source={imagens[valor]}
      style={[
        styles.dado,
        { width: tamanho, height: tamanho, transform: [{ scale }, { rotate }] },
      ]}
      accessibilityLabel={`Dado com valor ${valor}`}
    />
  );
}

const styles = StyleSheet.create({
  dado: {
    borderRadius: 10,
  },
});