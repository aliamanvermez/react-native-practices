import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import music_data from './music-data.json';
import SongCard from './src/components/SongCard/SongCard';
import SearchBar from './src/components/SearchBar';

function App() {
  const renderSeparator = () => <View style={styles.separator} />;
  const handleSearch = (text: any) => {
    const filteredList = music_data.filter(song => {
      const songTitle = song.title.toLowerCase();
      const searchTerm = text.toLowerCase();
      return songTitle.indexOf(searchTerm) > -1;
    });
    setList(filteredList);
    console.log(filteredList);
  };

  const [list, setList] = useState(music_data);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SearchBar onSearch={handleSearch} />
        <FlatList
          ItemSeparatorComponent={renderSeparator}
          data={list}
          renderItem={({item}) => <SongCard song={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {},
  separator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});
