import React from 'react';
import { View } from 'react-native';

const BoxPropsFirst = props => {
  return <View style={{ width: props.width, height: props.height, backgroundColor: props.color }}></View>;
};

export default BoxPropsFirst;
