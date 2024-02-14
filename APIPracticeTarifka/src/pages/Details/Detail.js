import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, SafeAreaView} from 'react-native';

import useFetch from '../../components/hooks/useFetch';
import {API_DETAIL_URL} from '../../constants/api';
import styles from './Detail.style';

const Detail = ({route}) => {
  const {idMeal} = route.params;
  const {data, loading, error} = useFetch(API_DETAIL_URL + idMeal);

  const renderDetail = ({item}) => {
    return (
      <View style={styles.container}>
        <Image source={{uri: item.strMealThumb}} style={styles.image} />
        <Text style={styles.title}>{item.strMeal}</Text>
        <Text style={styles.text}>{item.strCategory}</Text>
        <Text style={styles.nationText}>Nation : {item.strArea}</Text>
        <Text>{item.strInstructions}</Text>
      </View>
    );
  };

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }
  return <FlatList data={data.meals} renderItem={renderDetail} />;
};

export default Detail;
