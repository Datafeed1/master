import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import data from './data/sData'


export default function schedule() {
    const [time, setTime] = useState(null) 
    return (
        <View style={styles.container}>
          {data.map((item) => {
            return(
              <View style = {styles.cards}>

                <View style = {styles.timecontainer}>
                  <Text>{item.begin} {item.end}</Text> 
                  <Text>{item.day}</Text>
                </View>

                <View style = {styles.editcontainer}>
                  <Button title = {"edit"}/>
                </View>

                <View sytle = {styles.deletecontainer}>
                  <Button title = {"delete"}/>
                </View>

              </View>
            )
          })}
          <Button title={"add"}/>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: 10,
    paddingHorizontal: 20,
  },
  cards: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 20,
    maxHeight: 100,
    paddingHorizontal: 20,
  },
  editcontainer: {
    flex: .5,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: 10,
    paddingHorizontal: 20,
  },
  deletecontainer: {
    flex: .5,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: 10,
    paddingHorizontal: 20,
  },
  timecontainer: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: 10,
    paddingHorizontal: 20,
  },
});