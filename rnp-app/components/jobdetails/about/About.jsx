import React from "react";
import { View, Text } from "react-native";

import styles from "./about.style";

export default function About({ info }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the job:</Text>

      <View style={styles.contentBox}>
        <Text styles={styles.contextText}>{info}</Text>
      </View>
    </View>
  );
}
