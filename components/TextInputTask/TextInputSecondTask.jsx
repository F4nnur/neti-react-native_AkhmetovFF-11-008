import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

const TextInputSecondTask = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [name, setName] = useState('');
  const handleButton = () => {
    setButtonClicked(!buttonClicked);
  };
  return (
    <View>
      <Text style={buttonClicked ? { marginBottom: 3 } : { marginBottom: 10 }}>Second Task</Text>
      {buttonClicked && <Text style={{ marginVertical: 16 }}> {name ? `Hi ${name}!` : 'What is your name?'} </Text>}
      <TextInput
        style={{ padding: 8, backgroundColor: '#cbb0b0', marginBottom: 16 }}
        onChangeText={text => setName(text)}
      ></TextInput>
      <Button title={buttonClicked ? 'Hide text' : 'Show Text'} onPress={handleButton} />
    </View>
  );
};

export default TextInputSecondTask;
