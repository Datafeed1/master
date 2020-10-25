import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import menu from '../screens/menu.js'

const Menu = createStackNavigator();
export default function MenuScreen() {
    return (
        // <NavigationContainer>
        <Menu.Navigator>
            <Menu.Screen name="Menu" component={menu}/>
        </Menu.Navigator>
        // </NavigationContainer>
    );
  } 