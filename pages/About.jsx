import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>About</Text>
      <Pressable style={styles.mainButton} onPress={() => navigation.goBack()}>
        <Text style={styles.text}>Go Back</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#fff',
  },
  mainText: {
    alignSelf: 'center',
    fontSize: 28,
  },
  mainButton: {
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#2F70AF',
    width: 200,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default About;
