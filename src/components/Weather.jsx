import React from "react";
import { StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import AnimatedLoader from "./AnimatedLoader";

const Weather = ({ data }) => {
  const weatherOptions = {
    Thunderstorm: {
      iconName: "weather-lightning",
      gradient: ["#141E30", "#243B55"],
    },
    Drizzle: {
      iconName: "weather-rainy",
      gradient: ["#3a7bd5", "#1CB5E0"],
    },
    Rain: {
      iconName: "weather-pouring",
      gradient: ["#000046", "#1CB5E0"],
    },
    Snow: {
      iconName: "snowflake",
      gradient: ["#83a4d4", "#b6fbff"],
    },
    Dust: {
      iconName: "weather-windy-variant",
      gradient: ["#B79891", "#94716B"],
    },
    Smoke: {
      iconName: "weather-windy",
      gradient: ["#56CCF2", "#2F80ED"],
    },
    Haze: {
      iconName: "weather-hazy",
      gradient: ["#3E5151", "#DECBA4"],
    },
    Mist: {
      iconName: "weather-fog",
      gradient: ["#606c88", "#3f4c6b"],
    },
    Clear: {
      iconName: "weather-sunny",
      gradient: ["#56CCF2", "#2F80ED"],
    },
    Clouds: {
      iconName: "weather-cloudy",
      gradient: ["#757F9A", "#D7DDE8"],
    },
  };
  return !data.weather ? (
    <AnimatedLoader />
  ) : (
    <LinearGradient
      style={styles.container}
      colors={
        weatherOptions[
          data.weather[0].main === "Atmosphere"
            ? data.weather[0].description
            : data.weather[0].main
        ].gradient
      }
    >
      <MaterialCommunityIcons
        name={
          weatherOptions[
            data.weather[0].main === "Atmosphere"
              ? data.weather[0].description
              : data.weather[0].main
          ].iconName
        }
        size={116}
        color="white"
      />
      <Text style={styles.textTemp}>{Math.round(data.main.temp)}°</Text>
      <Text style={styles.textCity}>{data.name}</Text>
      <Text style={styles.textDesc}>{data.weather[0].description}</Text>
      <Text style={styles.textWind}>wind speed: {data.wind.speed} m/s</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -270,
  },
  textTemp: {
    color: "white",
    fontSize: 42,
    marginTop: -5,
    marginBottom: 25,
    fontFamily: "Quicksand",
  },
  textCity: {
    color: "white",
    fontSize: 40,
    marginBottom: 10,
    fontFamily: "Quicksand",
  },
  textDesc: {
    color: "white",
    fontSize: 30,
    fontFamily: "Quicksand",
  },
  textWind: {
    color: "white",
    fontSize: 20,
    fontFamily: "Quicksand",
  },
});

export default Weather;
