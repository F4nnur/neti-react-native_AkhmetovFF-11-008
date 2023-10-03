import React from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TodoItem = props => {
  return (
    <View style={styles.todoLine}>
      <TouchableOpacity style={styles.todoLineTouch}>
        <Text style={{ flex: 3, marginBottom: 5 }}>{props.item}</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 8, padding: 5 }}>
        <Pressable onPress={() => props.handleComplete(props.index)}>
          <Text style={props.isCompleted ? { color: 'green' } : { color: 'red' }}>Выполнено</Text>
        </Pressable>
        <Pressable onPress={() => props.handleDelete(props.index)}>
          <Text>X</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoLine: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: 'blue',
    borderWidth: 1,
  },
  todoLineTouch: {
    padding: 8,
  },
});
export default TodoItem;
