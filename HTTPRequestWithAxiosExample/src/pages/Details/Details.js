import React from 'react';
import {SafeAreaView, Text, Image, View} from 'react-native';

const Details = ({route}) => {
  const {id} = route.params;
  console.log(id);
  return (
    <SafeAreaView>
      <View>
        <Image />
        <Text>Product Name</Text>
        <Text>Product Price</Text>
        <Text>Product Description</Text>
      </View>
    </SafeAreaView>
  );
};

export default Details;
