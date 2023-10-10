import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, FlatList, SafeAreaView, Pressable } from 'react-native';
import TodoItem from '../components/TodoItem/TodoItem';
import * as ImagePicker from 'expo-image-picker';

const TodoPage = ({ navigation }) => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [completed, setCompleted] = useState([]);
  const [selectedImageUri, setSelectedImageUri] = useState(null);

  const addTodo = () => {
    let newTodos = [...todos];
    newTodos.push({ text: text, isCompleted: false, image: selectedImageUri });
    setTodos(newTodos);
    setText('');
    setSelectedImageUri(null);
  };
  const pickImage = async () => {
    const picker = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (picker.granted === false) {
      alert('Permission denied!');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.canceled) {
      setSelectedImageUri(result.assets[0].uri);
    }
  };
  const keyExtractor = index => {
    return index.toString();
  };
  const handleComplete = index => {
    const data = [...todos];
    data[index].isCompleted = !data[index].isCompleted;
    setTodos(data);
    if (data[index].isCompleted) {
      setCompleted(prevCompleted => [...prevCompleted, data[index]]);
    } else {
      setCompleted(prevCompleted => prevCompleted.filter(item => item !== data[index]));
    }
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
              image={item.image}
            />
          )}
        />
        <Pressable
          style={styles.btnCompleted}
          onPress={() => navigation.navigate('CompletedTasksPage', { completed: completed })}
        >
          <Text style={{ padding: 4 }}>Завершенные</Text>
        </Pressable>
        <TextInput style={styles.textInput} onChangeText={newText => setText(newText)} value={text}></TextInput>
        <Button title=' ADD ' onPress={() => addTodo()}></Button>
        <Button title='Add Image' onPress={() => pickImage()}></Button>
        <StatusBar style='auto' />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btnCompleted: {
    borderWidth: 2,
    width: 110,
    borderColor: 'blue',
    marginBottom: 8,
  },
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

export default TodoPage;
