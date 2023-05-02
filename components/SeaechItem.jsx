import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

const SeaechItem = (props) => {
  const { title, disease, color } = props;

  return (
    <View>
      <View style={styles.boxes}>
        <View style={[styles.box1, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{disease} diseases</Text>
        </View>
      </View>
    </View>
  );
};

export default SeaechItem;

const styles = StyleSheet.create({
  searchbar: {
    flex: 1,
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

  box1: {
    backgroundColor: "#EB7662",
    padding: "40px",
    borderRadius: "20px",
    marginBottom: 15,
  },

  title: {
    color: "#fff",
    fontSize: "20px",
    fontWeight: "600",
    fontFamily: "Arial",
    marginBottom: "5px",
  },
  text: {
    color: "#ccc",
    fontSize: "16px",
    fontFamily: "Arial",
  },
});
