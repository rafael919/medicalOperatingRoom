import React, {useEffect, useState} from 'react';
import {Platform, View, Alert} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, shallowEqual, useSelector} from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import {WSService, Methods} from '_utils';
//Stack Compoennt
import AppNavigator from './app-navigator';
const Stack = createStackNavigator();
//Main App render
const App = () => {
/********************** Socket Initialize function  **********************/
  useEffect(() => {
    let data = {
      token: 'my test token',
    };
    WSService.initializeSocket(data);
  }, []);
/************************  Render Main App   ****************************/
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator headerMode={'none'}>
          <>
            <Stack.Screen name="App" component={AppNavigator} />
          </>
        </Stack.Navigator>
        <FlashMessage position="top" animated={true} />
      </NavigationContainer>
    </View>
  );
};

export default App;
