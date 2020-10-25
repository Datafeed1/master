import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
// import { Button, StyleSheet, Text, View } from 'react-native';
import Navigator from './routes/TabNav'

// export const userType = React.createContext()
export default function App() {
  // userType = "None"
  // function userToggle() {
  //   setUser()
  // }
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  )
}

