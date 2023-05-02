import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Title = () => {
  return (
    <View style={styles.learnbox}>
      <View style={styles.learntext}>
        <Text style={styles.learnTitle}>Learn</Text>
        <Text style={styles.learnText}>Choose the part of the body</Text>
      </View>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  learnbox: {
    marginBottom: 29,
  },
  learnText: {
    color: "black",
    fontSize: "20px",
    fontWeight: "500",
    marginBottom: "20px",
  },
  learnTitle: {
    color: "black",
    fontSize: "35px",
    fontWeight: "800",
  },
});
