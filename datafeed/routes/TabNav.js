import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import ScheduleStack from './ScheduleStack'
import Review from '../screens/review'
import MenuScreenStack from './MenuScreenStack'
import MainScreenStack from './MainScreenStack'

const Tab = createMaterialBottomTabNavigator();
  
export default function App() {
  //type of user
  return (
    //if admin:
    // <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Main" component={MainScreenStack}/>
        <Tab.Screen name="Schedule" component={ScheduleStack}/>
        <Tab.Screen name="Review" component={Review}/>
        <Tab.Screen name="Menu" component={MenuScreenStack}/>
      </Tab.Navigator>
    // </NavigationContainer>
    //if user
    //if volunteer/donor
  );
}
