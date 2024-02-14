import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import {API_CATEGORIES_URL} from '../../constants/api';
import CategoriesCard from '../../components/Cards/CategoriesCard';
import useFetch from '../../components/hooks/useFetch';

const Categories = ({navigation}) => {
  const {data, loading, error} = useFetch(API_CATEGORIES_URL);

  const handleCategorySelect = strCategory => {
    navigation.navigate('Meals', {strCategory});
  };

  const renderCategory = ({item}) => {
    return (
      <CategoriesCard
        category={item}
        onSelect={() => handleCategorySelect(item.strCategory)}
      />
    );
  };

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" />
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

  return (
    <SafeAreaView>
      <FlatList data={data.categories} renderItem={renderCategory} />
    </SafeAreaView>
  );
};

export default Categories;
