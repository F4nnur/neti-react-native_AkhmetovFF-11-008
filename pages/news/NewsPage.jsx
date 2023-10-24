import React, { useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { getPosts } from '../../axios/posts/posts';

const NewsPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts(10, 5).then(response => setPosts(response.data));
  }, []);
  return (
    <ScrollView>
      {posts.map(item => (
        <Text key={item.title}>{item.title}</Text>
      ))}
    </ScrollView>
  );
};

export default NewsPage;
