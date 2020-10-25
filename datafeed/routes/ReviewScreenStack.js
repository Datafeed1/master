import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import review from '../screens/review.js'

const Review = createStackNavigator();
export default function ReviewScreen() {
    const state = {
        //rating
        //qual
    }
    return (
        // <NavigationContainer>
        <Review.Navigator>
            <Review.Screen name="Review" component={review}/>
        </Review.Navigator>
        // </NavigationContainer>
    );
  } 