import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import MealsDetailCard from '../../MealsDetailCard/MealsDetailCard';
import {API_MEALS_URL} from '../../../constants/api';
import {FlatList} from 'react-native-gesture-handler';
import useFetch from '../../hooks/useFetch';

const MealDetail = ({route, navigation}) => {
  console.log(route.params);
  const {category} = route.params;
  const {data} = useFetch(API_MEALS_URL + category);

  const renderCategory = ({item}) => (
    <MealsDetailCard
      data={item}
      onSelect={() => handleMealSelect(item.idMeal)}
    />
  );

  const handleMealSelect = meal => {
    navigation.navigate('DetailPage', {meal});
  };

  return <FlatList data={data.meals} renderItem={renderCategory} />;
};

export default MealDetail;
