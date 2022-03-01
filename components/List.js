import { View, Text, Image, StyleSheet } from "react-native";
import { useState } from "react";
import { TouchableHighlight, TouchableOpacity } from "react-native";

export default function List(props) {
  const [informations, setInformations] = useState(false);
  const [weather, setWeather] = useState([]);

  const handlePress = (countryCapital) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${countryCapital}&units=metric&appid=be2cb14537f6eac7f6325a3421aa70e0`
    )
      .then((res) => res.json())
      .then((res) => {
        setWeather(res);
        setInformations((prevState) => !prevState);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={(styles.text, styles.name)}>
        {props.country.name.common}
      </Text>
      <Text style={(styles.text, styles.capital)}>{props.country.capital}</Text>
      <TouchableOpacity onPress={() => handlePress(props.country.capital)}>
        <Image style={styles.img} source={{ uri: props.country.flags.png }} />
      </TouchableOpacity>
      {informations && (
        <View>
          <Text>Capitale : {props.country.capital}</Text>
          <Text>
            Météo : {weather.weather[0].main}, {weather.main.temp}°C
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 10,
  },

  text: {
    margin: 5,
  },

  name: {
    fontWeight: "bold",
  },

  capital: {},

  img: {
    width: 100,
    height: 50,
  },
});
