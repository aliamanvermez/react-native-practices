import React, {useState} from 'react';
import {SafeAreaView, Text, View, FlatList, Switch} from 'react-native';

const data = [
  {id: 0, name: 'cafe.exe', isFavorite: true},
  {id: 1, name: 'KafaKafe', isFavorite: false},
  {id: 2, name: 'Rock n Roll', isFavorite: false},
  {id: 3, name: 'Example 1', isFavorite: false},
  {id: 4, name: 'Example 2', isFavorite: false},
  {id: 5, name: 'Example3', isFavorite: false},
];

function App() {
  const [cafeList, setCafeList] = useState(data);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  function onFavoritesChange(
    isFavoriteSelected: boolean | ((prevState: boolean) => boolean),
  ) {
    setShowOnlyFavorites(isFavoriteSelected);
    isFavoriteSelected
      ? setCafeList(data.filter(cafeList => cafeList.isFavorite))
      : setCafeList(data);
  }

  return (
    <SafeAreaView>
      <View>
        <Text> Show only favorited cafee </Text>
        <Switch value={showOnlyFavorites} onValueChange={onFavoritesChange} />
        <FlatList
          data={cafeList}
          renderItem={({item}) => (
            <Text style={{fontSize: 25}}>{item.name}</Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
