import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native";
import { useEffect, useState } from "react";

import List from "./components/List";

export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((res) => {
        setCountries(res);
      });
  }, []);

  return (
    <View style={styles.container}>
      {countries.length > 0 && (
        <FlatList
          data={countries}
          renderItem={(data) => <List country={data.item} />}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={styles.border}></View>}
        />
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
  },

  border: {
    borderBottomWidth: 1,
    borderColor: "blue",
  },
});
