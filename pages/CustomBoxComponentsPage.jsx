import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import BoxPropsFirst from '../components/CustomComponentsTasks/BoxPropsFirst';

const CustomBoxComponentsPage = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [color, setColor] = useState('');
  const [box, setBox] = useState([]);

  const handleDelete = () => {
    setBox([]);
  };
  const handleAdd = (w, h, c) => {
    setBox([...box, { width: w, height: h, color: c }]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.boxesContainer}>
        {box.map(item => (
          <BoxPropsFirst width={item.width} height={item.height} color={item.color} />
        ))}
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ marginBottom: 16 }}>
          <View style={{ marginBottom: 16 }}>
            <Text>Width:</Text>
            <TextInput
              style={{ height: 50, padding: 8, backgroundColor: '#d9cece' }}
              onChangeText={text => setWidth(Number(text))}
            ></TextInput>
          </View>
          <View style={{ marginBottom: 16 }}>
            <Text>Height:</Text>
            <TextInput
              style={{ height: 50, padding: 8, backgroundColor: '#d9cece' }}
              onChangeText={text => setHeight(Number(text))}
            ></TextInput>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View style={styles.colorsContainer}>
            <Text>Color:</Text>
            <Pressable
              style={{ width: 50, height: 50, backgroundColor: 'yellow' }}
              onPress={() => setColor('yellow')}
            ></Pressable>
            <Pressable
              style={{ width: 50, height: 50, backgroundColor: 'blue' }}
              onPress={() => setColor('blue')}
            ></Pressable>
            <Pressable
              style={{ width: 50, height: 50, backgroundColor: 'red' }}
              onPress={() => setColor('red')}
            ></Pressable>
          </View>
          <View style={styles.buttonsContainer}>
            <Pressable style={styles.mainButton} onPress={() => handleAdd(width, height, color)}>
              <Text style={{ color: 'white' }}>Add</Text>
            </Pressable>
            <Pressable style={styles.mainButton} onPress={handleDelete}>
              <Text style={{ color: 'white' }}>Delete</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
  },

  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  boxesContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 30,
    marginLeft: 20,
  },
  colorsContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },

  mainButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2F70AF',
    height: 50,
    borderRadius: 10,
  },
});

export default CustomBoxComponentsPage;
