import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = ({ appoitments, setApooitments }) => {
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    axios
      .get("https://64506bd6e1f6f1bb22976abc.mockapi.io/appoitments")
      .then((res) => {
        setApooitments(res.data);
        setOriginalData(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  let search = (value) => {
    let filteredAppoitment = originalData.filter((q) =>
      q.title.toLowerCase().includes(value.toLowerCase())
    );

    setApooitments([...filteredAppoitment]);
  };
  return (
    <View style={styles.searchbar}>
      <View style={styles.search}>
        <TextInput onChangeText={search} style={styles.searching} />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchbar: {
    flex: 1,
    marginBottom: 45,
  },
  learnbox: {
    flex: 1,
  },

  date: {
    color: "#ddd",
    fontWeight: "500",
    fontSize: "20px",
  },
  searching: {
    color: "#333",
    fontWeight: "500",
    fontSize: "20px",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 15,
    width: "100%",
  },
});
