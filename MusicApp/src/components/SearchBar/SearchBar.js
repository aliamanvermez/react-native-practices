import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './SearchBar.style';

const SearchBar = props => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search..."
        onChangeText={props.onSearch}
        style={styles.container}
      />
    </View>
  );
};

export default SearchBar;
