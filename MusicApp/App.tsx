import React from "react";
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import music_data from './music-data.json';
import SongCard from "./src/components/SongCard";

function App() {
    
    const renderSeparator = () => <View style = {styles.separator} />

    return(
        <SafeAreaView style= {styles.container}>
            <View style = {styles.container}>
                <FlatList ItemSeparatorComponent={renderSeparator} data={music_data} renderItem={({item}) => <SongCard song= {item}/>} keyExtractor={item => item.id } />
            </View>
        </SafeAreaView>
    )
}
export default App;

const styles = StyleSheet.create({
    container : {
       
    },
    separator : {
        borderWidth : 1,
        borderColor : '#e0e0e0'
    }
});

