import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import useFetch from '../../components/hooks/useFetch';
import {API_MEALS_URL} from '../../constants/api';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './Meals.style';

const Meals = ({route, navigation}) => {
  const {strCategory} = route.params;
  const {data, loading, error} = useFetch(API_MEALS_URL + strCategory);

  function handleMealSelect(idMeal) {
    navigation.navigate('Detail', {idMeal});
  }

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

  const renderMeals = ({item}) => {
    return (
      <TouchableWithoutFeedback onPress={() => handleMealSelect(item.idMeal)}>
        <View style={styles.container}>
          <Image source={{uri: item.strMealThumb}} style={styles.image} />
          <Text style={styles.text}>{item.strMeal}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <SafeAreaView>
      <FlatList data={data.meals} renderItem={renderMeals} />
    </SafeAreaView>
  );
};

export default Meals;
