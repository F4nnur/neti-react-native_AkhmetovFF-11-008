import React, { useEffect } from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react';
import { useRootStore } from '../../hooks/useRootStore';

const LogsPage = observer(() => {
  const { logsStore } = useRootStore();
  const logs = logsStore.logs;

  useEffect(() => {}, [logs]);

  const deleteLogs = async () => {
    await logsStore.actionDeleteLogsFromLocal();
  };

  return (
    <SafeAreaView>
      <Button title={'Delete Logs'} onPress={deleteLogs}></Button>
      <ScrollView>
        {logs.map((item, index) => (
          <View style={styles.text} key={index}>
            <Text>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  text: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'blue',
    padding: 8,
    margin: 4,
    maxHeight: 80,
  },
});
export default LogsPage;
