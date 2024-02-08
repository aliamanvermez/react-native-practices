import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import HeaderCard from './src/components/HeaderCard/Header';
import AddTaskCard from './src/components/AddTaskCard/AddTask';
import TaskCard from './src/components/TaskCard';
import {userStore} from './src/Store/userStore';

function App() {
  const userState = userStore(state => state);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <HeaderCard />
        <FlatList
          data={userState.objects}
          renderItem={({item}) => <TaskCard props={item} />}
        />
      </View>
      <View style={styles.addTaskCard}>
        <AddTaskCard />
      </View>
    </SafeAreaView>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#112027',
  },
  addTaskCard: {
    position: 'absolute',
    backgroundColor: '#112027',
    bottom: 10,
    left: 0,
    right: 0,
  },
});
