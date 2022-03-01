import { View, Text, StyleSheet } from "react-native";

export default function List(props) {
  return (
    <View style={styles.container}>
      <Text style={(styles.text, styles.name)}>
        {props.country.name.common}
      </Text>
      <Text style={(styles.text, styles.capital)}>{props.country.capital}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    margin: 5,
  },

  name: {
    fontWeight: "bold",
  },

  capital: {},
});
