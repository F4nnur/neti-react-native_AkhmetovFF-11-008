import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, FlatList, SafeAreaView, Pressable } from 'react-native';
import TodoItem from '../../components/TodoItem/TodoItem';
import * as ImagePicker from 'expo-image-picker';
import { observer } from 'mobx-react';
import { useRootStore } from '../../hooks/useRootStore';

const TodoPage = observer(({ navigation }) => {
  const [text, setText] = useState('');
  const [selectedImageUri, setSelectedImageUri] = useState(null);
  const { todoStore, logsStore } = useRootStore();

  useEffect(() => {
    todoStore.getTodoObjectFromService();
    logsStore.getLogsObjectFromService();
  }, []);
  const addTodo = () => {
    todoStore.actionAdd(text, false, selectedImageUri);
    logsStore.actionForAnyOperation(`Добавлена запись: ${text}`);
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
    todoStore.actionComplete(index);
    logsStore.actionForAnyOperation(`Задача под названием: ${todoStore.todoModel.todos[index].text} была выполнена`);
  };

  const deleteTodo = index => {
    logsStore.actionForAnyOperation(`Задача под названием: ${todoStore.todoModel.todos[index].text} была удалена`);
    todoStore.actionDelete(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text>NEW:</Text>
        {todoStore.todoModel && !todoStore.isLoading ? (
          <FlatList
            data={todoStore.todoModel.todos}
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
        ) : (
          <Text>Loading</Text>
        )}
        <Pressable
          style={styles.btnCompleted}
          onPress={() =>
            navigation.navigate('CompletedTasksPage', {
              completed: todoStore.actionGetCompleteTodos(todoStore.todoModel.todos) || [],
            })
          }
        >
          <Text style={{ padding: 4 }}>Завершенные</Text>
        </Pressable>
        <Pressable
          style={styles.btnCompleted}
          onPress={() => navigation.navigate('LogsPage', { logs: logsStore.logsModel.logs })}
        >
          <Text style={{ padding: 4, textAlign: 'center' }}>Логи</Text>
        </Pressable>
        <TextInput style={styles.textInput} onChangeText={newText => setText(newText)} value={text}></TextInput>
        <Button title=' ADD ' onPress={() => addTodo()}></Button>
        <Button title='Add Image' onPress={() => pickImage()}></Button>
        <StatusBar style='auto' />
      </View>
    </SafeAreaView>
  );
});

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
