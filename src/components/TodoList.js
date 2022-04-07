import React, { useState } from "react";

import { Stack, Pressable, Text, Flex, HStack, Button } from "native-base";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

import { StyleSheet } from "react-native";

export default ({ todoList, deleteTodo }) => {
  const [textSyle, setTextStyle] = useState(styles.textList);

  const doneTodo = async () => {
    setTextStyle(styles.doneText);
  };

  return (
    <HStack direction="row" style={styles.todoCard}>
      <Stack>
        <Text style={textSyle}>{todoList}</Text>
      </Stack>
      <Button style={styles.doneIcon} onPress={doneTodo} bg="green.300">
        <Ionicons
          name="checkmark-done-circle-outline"
          size={22}
          color="#064e3b"
        />
      </Button>
      <Button onPress={deleteTodo} bg="red.600">
        <FontAwesome name="trash-o" size={22} color="#fbcfe8" />
      </Button>
    </HStack>
  );
};

const styles = StyleSheet.create({
  todoCard: {
    minWidth: "92%",
    maxWidth: "95%",
    backgroundColor: "#fff",
    borderRadius: 5,
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 8,
    marginTop: 8,
  },
  textList: {
    fontSize: 18,
    textAlign: "center",
  },
  doneIcon: {
    marginLeft: "auto",
    marginRight: 15,
  },
  doneText: {
    textDecorationLine: "line-through",
    fontSize: 18,
    textAlign: "center",
  },
});
