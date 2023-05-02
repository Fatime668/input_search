import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import SeaechItem from "./components/SeaechItem";
import Title from "./components/Title";
import SearchBar from "./components/SearchBar";
import { FlatList } from "react-native-web";

export default function App() {
  const [appoitments, setApooitments] = useState([]);

  return (
    <View style={styles.container}>
      <SearchBar appoitments={appoitments} setApooitments={setApooitments} />
      <Title />
      <FlatList
        data={appoitments}
        renderItem={({ item }) => (
          <SeaechItem
            title={item.title}
            disease={item.disease}
            color={item.color}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "20px",
    marginVertical: "60px",
    flex: 1,
  },
});
