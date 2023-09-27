import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextInputFirstTask from '../components/TextInputTask/TextInputFirstTask';
import TextInputSecondTask from '../components/TextInputTask/TextInputSecondTask';

const TextInputTasksPage = () => {
  return (
    <View style={styles.container}>
      <TextInputFirstTask />
      <TextInputSecondTask />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
});
export default TextInputTasksPage;
