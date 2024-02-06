import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, Button, View} from 'react-native';

function App() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(100);
  const [helloFlag, setHelloFlag] = useState(true);
  
  function updateFlag(){
    setHelloFlag(!helloFlag);
  }

  useEffect(() => {
    console.log('Number changed to : ' + number);
  }, [number]);

  useEffect(() => {
    console.log('Counter changed :' + counter);
  }, [counter]);

  return (
    <SafeAreaView>
      <Text>Number : {number}</Text>
      <Button title="Increase" onPress={() => setNumber(number + 1)} />
      <Text>Counter : {counter}</Text>
      <Button title="Counter" onPress={() => setCounter(counter + 100)} />
      <Button title="Toggle Hello" onPress={updateFlag} />
      {helloFlag && <Hello /> }
    </SafeAreaView>
  );
}

export default App;

function Hello(){

  useEffect(() => {
    console.log('Hello component is mounted');

    return () => {
      console.log('Hello component is unmounted');
    }
  }, []);

  return (
    <View style= {{backgroundColor : 'aqua', padding: 10}}>
      <Text>Hello </Text>
    </View>
  );
}
