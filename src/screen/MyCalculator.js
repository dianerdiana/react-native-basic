import React, { useState } from "react";

import Button from "../components/Button";
import { View, HStack, Center, Stack, Text, Pressable } from "native-base";
import { StyleSheet, TouchableOpacity } from "react-native";

export default () => {
  const [state, dispatch] = useState({
    currentValue: "0",
    operator: null,
    previousValue: null,
  });

  const handleNumber = (value, state) => {
    if (state.currentValue === "0") {
      return dispatch({ ...state, currentValue: `${value}` });
    }

    return dispatch({
      ...state,
      currentValue: `${state.currentValue}${value}`,
    });
  };

  const handleEqual = (state) => {
    const { currentValue, previousValue, operator } = state;

    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);
    const resetState = {
      operator: null,
      previousValue: null,
    };

    if (operator === "+") {
      dispatch({
        currentValue: previous + current,
        ...resetState,
      });
    }

    if (operator === "-") {
      dispatch({
        currentValue: previous - current,
        ...resetState,
      });
    }

    if (operator === "/") {
      dispatch({
        currentValue: previous / current,
        ...resetState,
      });
    }

    if (operator === "*") {
      dispatch({
        currentValue: previous * current,
        ...resetState,
      });
    }
  };

  const calculator = (type, value) => {
    switch (type) {
      case "number":
        return handleNumber(value, state);
      case "operator":
        return dispatch({
          currentValue: "0",
          previousValue: state.currentValue,
          operator: value,
        });
      case "percentage":
        return dispatch({
          currentValue: state.currentValue * 0.01,
        });
      case "equal":
        return handleEqual(state);
      case "reset":
        return dispatch({
          currentValue: "0",
          previousValue: null,
          operator: null,
        });
    }
  };

  // const initialState = dispatch({
  //   currentValue: "0",
  //   previousValue: null,
  //   operator: null,
  // });

  return (
    <View>
      <Stack style={styles.screenDisplay}>
        <Text style={styles.textDisplay}>{state.currentValue}</Text>
      </Stack>
      <Stack>
        <HStack flex={1} justifyContent="center">
          <Button
            text="1"
            theme="secondary"
            onPress={() => calculator("number", "1", state)}
          />
          <Button
            text="2"
            theme="secondary"
            onPress={() => calculator("number", "2", state)}
          />
          <Button
            text="-"
            theme="accent"
            onPress={() => calculator("operator", "-", state)}
          />
          <Button
            text="+"
            theme="accent"
            onPress={() => calculator("operator", "+", state)}
          />
        </HStack>
        <HStack flex={1} justifyContent="center">
          <Button
            text="3"
            theme="secondary"
            onPress={() => calculator("number", "3", state)}
          />
          <Button
            text="4"
            theme="secondary"
            onPress={() => calculator("number", "4", state)}
          />
          <Button
            text="/"
            theme="accent"
            onPress={() => calculator("operator", "/", state)}
          />
          <Button
            text="*"
            theme="accent"
            onPress={() => calculator("operator", "*", state)}
          />
        </HStack>
        <HStack flex={1} justifyContent="center">
          <Button
            text="5"
            theme="secondary"
            onPress={() => calculator("number", "5", state)}
          />
          <Button
            text="6"
            theme="secondary"
            onPress={() => calculator("number", "6", state)}
          />
          <Button
            text="%"
            theme="accent"
            onPress={() => calculator("percentage")}
          />
          <Button text="=" theme="accent" onPress={() => calculator("equal")} />
        </HStack>
        <HStack flex={1} justifyContent="center">
          <Button
            text="7"
            theme="secondary"
            onPress={() => calculator("number", "7", state)}
          />
          <Button
            text="8"
            theme="secondary"
            onPress={() => calculator("number", "8", state)}
          />
          <Button
            text="9"
            theme="secondary"
            onPress={() => calculator("number", "9", state)}
          />
          <Button
            text="0"
            theme="secondary"
            onPress={() => calculator("number", "0", state)}
          />
        </HStack>
      </Stack>
      <Stack>
        <HStack flex={1} justifyContent="center" mt={1}>
          <TouchableOpacity
            style={styles.resetButton}
            onPress={() => calculator("reset")}
          >
            <Text style={styles.textReset}>Clear</Text>
          </TouchableOpacity>
        </HStack>
      </Stack>
    </View>
  );
};

const styles = StyleSheet.create({
  screenDisplay: {
    position: "relative",
    height: "60%",
    width: "100%",
    marginTop: 30,
    backgroundColor: "black",
    marginBottom: 20,
    borderRadius: 8,
  },
  textDisplay: {
    color: "#fff",
    position: "absolute",
    fontSize: 32,
    textAlign: "right",
    bottom: 25,
    right: 25,
  },
  resetButton: {
    backgroundColor: "black",
    width: "90%",
    paddingVertical: 10,
    borderRadius: 8,
    textAlign: "center",
  },
  textReset: {
    color: "#fff",
    fontSize: 22,
  },
});
