import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./src/components/Weather";
import AnimatedLoader from "./src/components/AnimatedLoader";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  let [fontsLoaded] = useFonts({
    Quicksand: require("./assets/fonts/static/Quicksand-Medium.ttf"),
  });
  const [isLoading, setIsLoading] = useState(true);
  const [weatherData, setWeatherData] = useState({});
  const API_KEY = "2002e58b1b63a441b83a6b24a53cf29a";

  const getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    console.log(data);
    setWeatherData(data);
    setIsLoading(false);
  };

  const getLocation = async () => {
    try {
      const response = await Location.requestForegroundPermissionsAsync();
      console.log(response);
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Не могу определить местоположение");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return isLoading ? <AnimatedLoader /> : <Weather data={weatherData} />;
}
