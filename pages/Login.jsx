import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const Login = () => {
  const [name, setName] = useState('');
  const [passwd, setPasswd] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);
  const [showError, setShowError] = useState(false);
  const user = { login: 'Fannur', passwd: '123' };

  // Handlers
  const handleClick = () => {
    if (name === user.login && passwd === user.passwd) {
      setShowWelcome(true);
    } else {
      setShowError(true);
    }
  };

  const handleLogOut = () => {
    setShowWelcome(false);
    setShowError(false);
  };

  // Renders
  if (showWelcome) {
    return (
      <View
        style={{
          flex: 1,
          alignContent: 'center',
          justifyContent: 'center',
          padding: 16,
        }}
      >
        <Text>Welcome</Text>
        <Button title='goBack' onPress={handleLogOut} />
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        padding: 16,
      }}
    >
      {showError && <Text style={{ color: 'red' }}>Error</Text>}
      <Text style={{ marginVertical: 16 }}>Login </Text>
      <TextInput style={{ padding: 8, backgroundColor: '#f5f5f5' }} onChangeText={text => setName(text)} />
      <Text>Password</Text>
      <TextInput
        style={{ padding: 8, backgroundColor: '#f5f5f5' }}
        onChangeText={text => setPasswd(text)}
        secureTextEntry={true}
      />
      <Button title='Login' onPress={handleClick} />
    </View>
  );
};

export default Login;
