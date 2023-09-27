import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation/Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
