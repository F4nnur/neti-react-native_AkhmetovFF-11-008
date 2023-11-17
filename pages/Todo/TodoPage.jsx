import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  SafeAreaView,
  Pressable,
  Alert,
  TouchableOpacity,
} from 'react-native';
import TodoItem from '../../components/TodoItem/TodoItem';
import * as ImagePicker from 'expo-image-picker';
import { observer } from 'mobx-react';
import { useRootStore } from '../../hooks/useRootStore';
import { Modalize } from 'react-native-modalize';

const TodoPage = observer(({ navigation }) => {
  const [text, setText] = useState('');
  const [selectedImageUri, setSelectedImageUri] = useState(null);
  const { todoStore, logsStore } = useRootStore();
  const modalRef = useRef(null);
  useEffect(() => {
    todoStore.getTodoObjectFromService();
  }, []);
  const addTodo = async () => {
    todoStore.actionAdd(text, false, selectedImageUri);
    await logsStore.actionForAnyOperation(`Добавлена запись: ${text}`);
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
  const handleComplete = async index => {
    todoStore.actionComplete(index);
    await logsStore.actionForAnyOperation(
      `Задача под названием: ${todoStore.todoModel.todos[index].text} была выполнена`,
    );
  };

  const deleteTodo = async index => {
    await logsStore.actionForAnyOperation(
      `Задача под названием: ${todoStore.todoModel.todos[index].text} была удалена`,
    );
    todoStore.actionDelete(index);
  };

  const alertFunction = index => {
    return Alert.alert('Do u really want to', 'Delete', [
      {
        text: 'Cancel',
        onPress: () => {
          console.log('Canceled');
        },
        style: 'cancel',
      },
      { text: 'Delete', onPress: () => deleteTodo(index) },
    ]);
  };

  const modalFunction = () => {
    modalRef.current.open();
  };
  const getTodo = () =>
    todoStore.todoModel === null ? [] : todoStore.actionGetCompleteTodos(todoStore.todoModel.todos);

  const renderItem = ({ item, index }) => (
    <View key={index}>
      <Text>{item.text}</Text>
    </View>
  );

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
                handleDelete={alertFunction}
                handleComplete={handleComplete}
                index={index}
                image={item.image}
              />
            )}
          />
        ) : (
          <Text>Loading</Text>
        )}
        <>
          <TouchableOpacity style={styles.btnCompleted} onPress={modalFunction}>
            <Text style={{ padding: 4 }}>Завершенные</Text>
          </TouchableOpacity>
          <Modalize
            ref={modalRef}
            modalTopOffset={300}
            closeOnOverlayTap
            disableScrollIfPossible={false}
            withHandle={false}
            childrenStyle={{
              padding: 20,
            }}
            modalStyle={{
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
            }}
            overlayStyle={{
              backgroundColor: 'gray',
            }}
            flatListProps={{
              data: getTodo(),
              keyExtractor: item => item.text,
              renderItem: renderItem,
              showsVerticalScrollIndicator: false,
            }}
          ></Modalize>
        </>
        <Pressable style={styles.btnCompleted} onPress={() => navigation.navigate('LogsPage')}>
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
