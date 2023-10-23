import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const LogsPage = ({ route }) => {
  const { logs } = route.params;

  return (
    <ScrollView>
      {logs.map((item, index) => (
        <View style={styles.text} key={index}>
          <Text>{item.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'blue',
    padding: 8,
    margin: 4,
    maxHeight: 80,
  },
});
export default LogsPage;
