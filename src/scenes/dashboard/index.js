
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Export all
import Dashboard from './views/dashboard';
const Stack = createStackNavigator();
// Setting Stack 
const DashboardStack = () => {
  return <Stack.Navigator headerMode={'none'}>
       <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
}

export default DashboardStack;
