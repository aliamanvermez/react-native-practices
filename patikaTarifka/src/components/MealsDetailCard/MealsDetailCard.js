import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './MealsDetailCard.style';

const MealsDetailCard = ({meals}) => {
  return (
    <TouchableWithoutFeedback onPress={null}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: meals.strMealThumb}} />
        <View style={styles.inner_container}>
          <Text style={styles.title}>{meals.strMeal}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealsDetailCard;
