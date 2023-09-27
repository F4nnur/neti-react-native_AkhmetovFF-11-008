import React from 'react';
import { View } from 'react-native';

const BoxPropsFirst = props => {
  return <View style={{ width: 100, height: 100, backgroundColor: props.color }}></View>;
};

export default BoxPropsFirst;
