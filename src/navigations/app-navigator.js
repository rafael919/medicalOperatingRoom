import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import DashboardStack from '_scenes/dashboard';


const AppNavigator = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="Dashboard" component={DashboardStack} />
    </Stack.Navigator>
  );
};
export default AppNavigator;
