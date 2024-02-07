import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import styles from './TaskCard.style';

const TaskCard = ({props}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>{props.name}</Text>
      </View>
    </SafeAreaView>
  );
};
export default TaskCard;
