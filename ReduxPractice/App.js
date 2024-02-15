import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {createStore} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';
import {legacy_createStore} from 'redux';

const initialState = {
  counter: 0,
};

function reducers(state, action) {
  switch (action.type) {
    case 'UPDATE_COUNTER':
      return {...state, counter: state.counter + 1};
    default:
      return state;
  }
}

export default () => {
  return (
    <Provider store={legacy_createStore(reducers, initialState)}>
      <SafeAreaView style={{flex: 1, backgroundColor: 'orange'}}>
        <Component1 />
        <Component2 />
      </SafeAreaView>
    </Provider>
  );
};

const Component1 = () => {
  const dispatch = useDispatch();
  const counter = useSelector(selector => selector.counter);

  const handleUpdate = () => {
    dispatch({type: 'UPDATE_COUNTER'});
  };

  return (
    <View style={{flex: 1, backgroundColor: 'blue'}}>
      <Text style={{fontSize: 30}}>First Component: {counter} </Text>
      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
};

const Component2 = () => {
  const counter = useSelector(selector => selector.counter);

  return (
    <View style={{backgroundColor: 'red', flex: 1}}>
      <Text style={{fontSize: 30}}>Second Component : {counter}</Text>
    </View>
  );
};
