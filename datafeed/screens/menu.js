import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Menu() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View>
            <Button title = {"Account Settings"}/>
            </View>

            <View>
            <Button title = {"Log Out"} color = "red"/>
            </View>
        </View>
      
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});