import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../pages/main/Main';
import About from '../pages/about/About';
import Login from '../pages/login/Login';
import TextInputTasksPage from '../pages/input/TextInputTasksPage';
import CustomBoxComponentsPage from '../pages/box/CustomBoxComponentsPage';
import TodoPage from '../pages/Todo/TodoPage';
import CompletedTasksPage from '../pages/Todo/CompletedTasksPage';
import LogsPage from '../pages/logs/LogsPage';

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Main} />
      <Stack.Screen name='About' component={About} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='TextInputTasksPage' component={TextInputTasksPage} />
      <Stack.Screen name='CustomBoxComponentsPage' component={CustomBoxComponentsPage} />
      <Stack.Screen name='TodoPage' component={TodoPage} />
      <Stack.Screen name='CompletedTasksPage' component={CompletedTasksPage} />
      <Stack.Screen name='LogsPage' component={LogsPage} />
    </Stack.Navigator>
  );
};

export default Navigation;
