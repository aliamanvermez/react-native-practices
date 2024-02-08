import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {userInfoStore} from '../store/store';

function Welcome() {
  const userInfoState = userInfoStore(state => state);
  return (
    <SafeAreaView>
      <Text>{userInfoState.userInfo.name}</Text>
      <Text>{userInfoState.userInfo.surname}</Text>
      <Text>{userInfoState.userInfo.age}</Text>
      <Text>{userInfoState.userInfo.email}</Text>
    </SafeAreaView>
  );
}

export default Welcome;
