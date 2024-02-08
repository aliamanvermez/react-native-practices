import React from 'react';
import {SafeAreaView, Text, View, TextInput} from 'react-native';
import styles from './Input.style';

function Input({label, placeholder, onChangeText}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
      </View>

      <View style={styles.inner_container}>
        <TextInput placeholder={placeholder} onChangeText={onChangeText} />
      </View>
    </SafeAreaView>
  );
}

export default Input;
