import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react';
import { useRootStore } from '../../hooks/useRootStore';

const NewsPage = observer(() => {
  const { postsStore } = useRootStore();
  useEffect(() => {
    postsStore.getItems();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        {!postsStore.isLoading
          ? postsStore.posts.map((item, index) => {
              return (
                <View key={index} style={styles.item}>
                  <Text style={styles.itemBody}>{item.body}</Text>
                </View>
              );
            })
          : null}
      </ScrollView>
    </SafeAreaView>
  );
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  item: {
    margin: 8,
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
  },
  itemId: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  itemBody: {
    color: '#0e5976',
  },
});
export default NewsPage;
