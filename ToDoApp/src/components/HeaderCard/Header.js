import React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import styles from './Header.style';
import {userStore} from '../../Store/userStore';

const Header = () => {
  const taskState = userStore(state => state);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.todonumber}>{taskState.objects.length}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;
