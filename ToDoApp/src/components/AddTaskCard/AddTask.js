import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

import styles from './AddTask.style';
import {taskStore} from '../../Store/taskStore';

const AddTaskCard = props => {
  const [input, setInput] = useState('');
  const taskState = taskStore(state => state);
  const handleInputChange = text => {
    setInput(text);
  };

  const handleSubmit = () => {
    input && taskState.addObject(input);
    setInput('');

  };

  useEffect(() => {
   
  }, [taskState.objects]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.text_input}
          placeholder="Görev ekle..."
          placeholderTextColor={styles.placeholder.color}
          onChangeText={handleInputChange}
          value={input}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddTaskCard;
