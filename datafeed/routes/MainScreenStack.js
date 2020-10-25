import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import main from '../screens/main.js'

const Main = createStackNavigator();
export default function MainScreen() {
    return (
        // <NavigationContainer>
        <Main.Navigator>
            <Main.Screen name="Main" component={main}/>
        </Main.Navigator>
        // </NavigationContainer>
    );
  } 