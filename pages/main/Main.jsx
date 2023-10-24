import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const Main = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Main</Text>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.mainButton} onPress={() => navigate('About')}>
          <Text style={styles.text}>About</Text>
        </Pressable>
        <Pressable style={styles.mainButton} onPress={() => navigate('Login')}>
          <Text style={styles.text}>Login</Text>
        </Pressable>
        <Pressable style={styles.mainButton} onPress={() => navigate('TextInputTasksPage')}>
          <Text style={styles.text}>TextInputTasks</Text>
        </Pressable>
        <Pressable style={styles.mainButton} onPress={() => navigate('CustomBoxComponentsPage')}>
          <Text style={styles.text}>CustomBoxComp</Text>
        </Pressable>
        <Pressable style={styles.mainButton} onPress={() => navigate('TodoPage')}>
          <Text style={styles.text}>TodoPage</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    backgroundColor: '#fff',
  },
  mainButton: {
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#2F70AF',
    width: 150,
    marginBottom: 16,
    marginLeft: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  mainText: {
    alignSelf: 'center',
    fontSize: 28,
    marginBottom: 16,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});

export default Main;
