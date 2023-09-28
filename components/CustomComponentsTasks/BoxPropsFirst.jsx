import React from 'react';
import { View } from 'react-native';

const BoxPropsFirst = props => {
  return (
    <View style={{ flex: 1, alignItems: props.align }}>
      <View
        style={{ width: props.width, height: props.height, backgroundColor: props.color, borderRadius: props.radius }}
      ></View>
      {props.view ? <View style={{ height: 10 }}></View> : null}
    </View>
  );
};

export default BoxPropsFirst;
