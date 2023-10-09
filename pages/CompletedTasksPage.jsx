import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ImageViewer from '../components/ImageViewer/ImageViewer';

const CompletedTasksPage = ({ route }) => {
  const { completed } = route.params;
  const placeholderImageSource = require('../assets/icon.png');

  return (
    <View>
      <FlatList
        data={completed}
        renderItem={({ item }) => (
          <View style={styles.text}>
            <Text>{item.text}</Text>
            <ImageViewer placeholderImageSource={placeholderImageSource} selectedImage={item.image} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    marginBottom: 8,
    borderWidth: 3,
    borderColor: 'blue',
    padding: 8,
    margin: 4,
  },
});

export default CompletedTasksPage;
