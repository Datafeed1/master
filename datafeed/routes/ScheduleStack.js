import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import schedule from '../screens/schedule.js'

const Schedule = createStackNavigator();
export default function ScheduleScreen() {
    return (
        // <NavigationContainer>
        <Schedule.Navigator>
            <Schedule.Screen name="Schedule" component={schedule}/>
        </Schedule.Navigator>
        //</NavigationContainer>
    );
  } 