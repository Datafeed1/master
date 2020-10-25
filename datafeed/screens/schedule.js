import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import data from './data/sData'
// import Collaspible from 'react-native-collapsible'

export default function schedule() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <Text
            style={{paddingTop:10, fontSize:18}}>When are you avaible?</Text>

            {data.map((item,key) => {
              return(
                // <Collapsible collapsed={isCollapsed}>

                  <View style = {styles.cards}>
                    <View style = {styles.timecontainer}>
                      <Text style={styles.time}>{item.begin} {item.end}</Text> 
                      <Text>{item.day}</Text>
                    </View>

                    <View style = {styles.editcontainer}>
                      <Button title = {"edit"}/>
                    </View>

                    <View sytle = {styles.deletecontainer}>
                      <Button color = "red" title = {"delete"}/>
                    </View>

                  </View>
                // {/* </Collapsible> */}

              )
            })}
            <Button title={"add"}/>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  cards: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    paddingTop: 20,
    paddingBottom:20,
    maxHeight: 100,
    paddingHorizontal: 20,
  },
  editcontainer: {
    flex: .35,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
  },
  deletecontainer: {
    flex: .35,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  timecontainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  time:{
    fontSize: 18
  }
});