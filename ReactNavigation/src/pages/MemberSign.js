import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Button} from 'react-native';
import Input from '../components/Input/Input';
import {userInfoStore} from '../store/store';
import {useNavigation} from '@react-navigation/native';

const MemberSign = props => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    age: 0,
    email: '',
  });
  const userState = userInfoStore(state => state);

  const handleInputChange = (fieldName, value) => {
    setFormData(prevData => ({
      ...prevData,
      [fieldName]: value,
    }));
  };
  2;
  const handleSubmit = () => {
    console.log(formData);
    userState.setUserInfo(formData);
    navigation.navigate('Welcome');
    //input && userState.addObject(input);
    //setInput('');
    //console.log(userState.objects);
  };

  useEffect(() => {}, [userState.objects]);

  return (
    <SafeAreaView>
      <Input
        label="Name"
        placeholder="Enter your name"
        onChangeText={text => handleInputChange('name', text)}
        value={formData.name}
      />
      <Input
        label="Surname"
        placeholder="Enter your surname"
        onChangeText={text => handleInputChange('surname', text)}
        value={formData.surname}
      />
      <Input
        label="Age"
        placeholder="Enter your age"
        onChangeText={text => handleInputChange('age', text)}
        value={formData.age}
      />
      <Input
        label="Email"
        placeholder="Enter your email"
        onChangeText={text => handleInputChange('email', text)}
        value={formData.email}
      />
      <Button title="Sign Up" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default MemberSign;
