import React, {Component} from 'react';
import { Button, StyleSheet, Text, View, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function nearby() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
              {/* <MapView
                initialRegion={{
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0,
                }} */}
            {/* /> */}
            <Image
              style={styles.image}
              source={require('./pic/Navigation.png')}
            />
            {/* <Text>Work in Progress</Text> */}
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
  image:{
    width: 400,
    height: 700,
    resizeMode: 'stretch'
  }
});