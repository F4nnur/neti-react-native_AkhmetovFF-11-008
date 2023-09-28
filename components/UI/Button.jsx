import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const Button = ({ text, width, height, color, align, radius, view, onchange }) => {
  const handleClick = (width, height, color, align, radius, view) => {
    onchange(width, height, color, align, radius, view);
  };
  return (
    <Pressable style={styles.mainButton} onPress={() => handleClick(width, height, color, align, radius, view)}>
      <Text style={{ color: 'white' }}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mainButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2F70AF',
    height: 50,
    borderRadius: 10,
  },
});
export default Button;
