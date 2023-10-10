import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../pages/home/HomePage';
import SettingsPage from '../pages/settings/SettingsPage';
import ChatPage from '../pages/chat/ChatPage';
import NewsPage from '../pages/news/NewsPage';
import Navigation from './Navigation';
import { Image, Pressable, Text } from 'react-native';
import About from '../pages/About';

const TabNavigation = ({ navigation: { navigate } }) => {
  const Tab = createBottomTabNavigator();
  const image = require('../assets/icon.png');

  return (
    <Tab.Navigator>
      <Tab.Screen name='Navigation' component={Navigation} options={{ headerShown: false }} />
      <Tab.Screen
        name='Home'
        component={HomePage}
        options={{
          headerTitle: () => <Image source={image} style={{ width: 50, height: 50 }} />,
          headerRight: () => (
            <Pressable onPress={() => navigate(About)}>
              <Text>About</Text>
            </Pressable>
          ),
        }}
      />
      <Tab.Screen name='Settings' component={SettingsPage} />
      <Tab.Screen name='Chat' component={ChatPage} />
      <Tab.Screen name='News' component={NewsPage} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
