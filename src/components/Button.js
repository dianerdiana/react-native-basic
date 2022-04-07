import React from "react";

import { TouchableOpacity, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 32,
  },
  textSecondary: {
    color: "#0f94f8",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 5,
    minWidth: 65,
    maxWidth: 75,
    minHeight: 70,
    maxHeight: 75,
  },
  buttonSecondary: {
    backgroundColor: "#E5E5E6",
  },
  buttonAccent: {
    backgroundColor: "black",
  },
});

export default ({ onPress, theme, text }) => {
  const buttonStyle = [styles.button];
  const textStyles = [styles.text];

  if (theme === "secondary") {
    buttonStyle.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyle.push(styles.buttonAccent);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};
