import React from 'react';
import { View } from 'react-native';
import BoxPropsFirst from '../components/CustomComponentsTasks/BoxPropsFirst';

const CustomBoxComponentsPage = () => {
  return (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
      <BoxPropsFirst color={'red'} />
      <BoxPropsFirst color={'green'} />
      <BoxPropsFirst color={'blue'} />
    </View>
  );
};

export default CustomBoxComponentsPage;
