import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';
import TodoItem from '../components/TodoItem/TodoItem';

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  const addTodo = () => {
    let newTodos = [...todos];
    newTodos.push({ text: text, isCompleted: false });
    setTodos(newTodos);
    setText('');
  };

  const keyExtractor = index => {
    return index.toString();
  };
  const handleComplete = index => {
    const data = [...todos];
    data[index].isCompleted = !data[index].isCompleted;
    setTodos(data);
  };
  const deleteTodo = index => {
    const data = [...todos];
    data.splice(index, 1);
    setTodos(data);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text>NEW:</Text>
        <FlatList
          data={todos}
          keyExtractor={(item, index) => keyExtractor(index)}
          renderItem={({ item, index }) => (
            <TodoItem
              item={item.text}
              isCompleted={item.isCompleted}
              handleDelete={deleteTodo}
              handleComplete={handleComplete}
              index={index}
            />
          )}
        />
        <TextInput style={styles.textInput} onChangeText={newText => setText(newText)} value={text}></TextInput>
        <Button title=' ADD ' onPress={() => addTodo()}></Button>
        <StatusBar style='auto' />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 18,
  },
  todoLine: {
    borderBottomColor: 'blue',
    borderWidth: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'blue',
    padding: 8,
  },
  todoLineTouch: {
    padding: 8,
  },
});
