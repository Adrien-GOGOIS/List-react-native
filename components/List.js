import { View, Text, Image, StyleSheet } from "react-native";

export default function List(props) {
  return (
    <View style={styles.container}>
      <Text style={(styles.text, styles.name)}>
        {props.country.name.common}
      </Text>
      <Text style={(styles.text, styles.capital)}>{props.country.capital}</Text>
      <Image style={styles.img} source={{ uri: props.country.flags.png }} />
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
