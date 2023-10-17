import React from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';
import { observer } from 'mobx-react';
import { useRootStore } from '../../hooks/useRootStore';

const HomePage = observer(() => {
  const { clickerStore } = useRootStore();
  const handleClick = () => {
    clickerStore.actionClick();
  };

  const handleClickForNull = () => {
    clickerStore.secondActionClick();
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Count: {clickerStore.count}</Text>
        <Text>Double: {clickerStore.doubleCount}</Text>
        <Button title='Click' onPress={handleClick} />
        <Button title='Make null' onPress={handleClickForNull} />
      </View>
    </SafeAreaView>
  );
});

export default HomePage;
