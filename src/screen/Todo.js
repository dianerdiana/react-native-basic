import {
  Center,
  Button,
  View,
  Input,
  FormControl,
  Stack,
  FlatList,
} from "native-base";

import { useState, useEffect } from "react";
import { KontenbaseClient } from "@kontenbase/sdk";

import TodoList from "../components/TodoList";
// import lists from "../util/lists";

const kontenbase = new KontenbaseClient({
  apiKey: "31a41260-ef51-463d-b5fb-953046afb985",
});

export default function Todo() {
  const [lists, setLists] = useState([]);
  const [form, setForm] = useState({
    notes: "",
  });

  const getTodos = async () => {
    try {
      const { data, error } = await kontenbase.service("todos").find();

      setLists(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTodo = async (notes) => {
    try {
      const { data, error } = await kontenbase.service("todos").create(form);

      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const { data, error } = await kontenbase.service("todos").deleteById(id);

      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <View bg="gray.200" h="40%">
        <Center h="100%">
          <FormControl>
            <Stack mx="4">
              <Input
                type="text"
                placeholder="What you want to do?"
                bg="white"
                size={"lg"}
                onChangeText={(value) => setForm({ ...form, notes: value })}
              />
            </Stack>
            <Stack mt={5}>
              <Center>
                <Button
                  size="lg"
                  maxWidth={24}
                  onPress={addTodo}
                  colorScheme="danger"
                >
                  Add List
                </Button>
              </Center>
            </Stack>
          </FormControl>
        </Center>
      </View>
      <View
        bg="gray.200"
        h="60%"
        borderTopColor="#d4d4d4"
        borderTopWidth="4"
        paddingTop={4}
      >
        <FlatList
          w="100%"
          data={lists}
          renderItem={({ item }) => (
            <Center>
              <TodoList
                todoList={item.notes}
                deleteTodo={() => deleteTodo(item._id)}
              />
            </Center>
          )}
        />
      </View>
    </>
  );
}
