import AnimatedEllipsis from "react-native-animated-ellipsis";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text } from "react-native";

const AnimatedLoader = () => {
  return (
    <LinearGradient
      colors={["#56CCF2", "#2F80ED"]}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text
          style={{
            marginTop: 15,
            marginRight: 2,
            fontSize: 30,
            color: "white",
            fontFamily: "Quicksand",
          }}
        >
          Loading
        </Text>
        <AnimatedEllipsis
          animationDelay={150}
          minOpacity={0.2}
          style={{
            color: "#fff",
            fontSize: 50,
            letterSpacing: -15,
          }}
        />
      </View>
    </LinearGradient>
  );
};

export default AnimatedLoader;
