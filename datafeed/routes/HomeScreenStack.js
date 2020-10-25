import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/login'
import Home from '../screens/home'
import TabNav from './TabNav'
import {userType} from '../App'

const HomeStack = createStackNavigator();
export default function HomeStackScreen() {
    const UserType = useContext(userType)
    return (
        <NavigationContainer>
            <HomeStack.Navigator>
                {UserType != "None" ? (
                <>   
                <HomeStack.Screen name="Home" component={Home} />
                <HomeStack.Screen name="Login" component={Login} />
                </>
                ):(
                <HomeStack.Screen name="Tab" component={TabNav} />
                )}
            </HomeStack.Navigator>
        </NavigationContainer>
    );
  } 