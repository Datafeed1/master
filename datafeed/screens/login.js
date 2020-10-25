import React, {useContext} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import {userType} from '../App'


export default function login() {
    const navigation = useNavigation()
    const UserType = useContext(userType)
    return (
      <View style = {styles.container}>
        {/* <TextInput style = {styles.form} ></TextInput> */}
        <Button
          title = {'Submit'}
          onPress = {() => {
            UserType = "User";
            navigation.navigate("Home");
            console.log(UserType)
            }
          }
        />
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
  // form:{
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   height: "10%"
    
  // },
});
