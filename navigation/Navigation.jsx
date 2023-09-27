import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../pages/Main';
import About from '../pages/About';
import Login from '../pages/Login';
import TextInputTasksPage from '../pages/TextInputTasksPage';
import CustomBoxComponentsPage from '../pages/CustomBoxComponentsPage';

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name={'Home'} component={Main} />
      <Stack.Screen name={'About'} component={About} />
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'TextInputTasksPage'} component={TextInputTasksPage} />
      <Stack.Screen name={'CustomBoxComponentsPage'} component={CustomBoxComponentsPage} />
    </Stack.Navigator>
  );
};

export default Navigation;
