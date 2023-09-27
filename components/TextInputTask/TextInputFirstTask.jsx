import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const TextInputFirstTask = () => {
  const [name, setName] = useState('');

  return (
    <View>
      <Text style={{ marginVertical: 16 }}> {name ? `Hi ${name}!` : 'What is your name?'} </Text>
      <TextInput
        style={{ padding: 8, backgroundColor: '#f5f5f5', marginBottom: 16 }}
        onChangeText={text => setName(text)}
      />
    </View>
  );
};

export default TextInputFirstTask;
