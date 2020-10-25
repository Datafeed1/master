import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Schedule from '../screens/schedule'
import Nearby from '../screens/nearby'
import Menu from '../screens/menu'
// import Main from '../screens/main'
import Main from './MainScreenStack'
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createMaterialBottomTabNavigator();
export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Main"
        component={Main} 
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#c2d500',
          tabBarIcon: ({ color }) => (
            <Icon name="md-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="Schedule" 
        component={Schedule}         
        options={{
          tabBarLabel: 'Schedule',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="md-time" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="Nearby" 
        component={Nearby} 
        options={{
          tabBarLabel: 'Nearby',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="md-locate" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="Menu" component={Menu} options={{
          tabBarLabel: 'Menu',
          tabBarColor: '#5f5f5f',
          tabBarIcon: ({ color }) => (
            <Icon name="md-menu" color={color} size={26} />
          ),
        }}/>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  nav:{
    flex: 1,
    color: "#fff",
  }
});
