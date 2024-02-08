/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './Router';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Router);
