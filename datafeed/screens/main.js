import React, {Component} from 'react';
import { Button, StyleSheet, Text, View, ScrollView,Alert} from 'react-native';
import StarRating from './components/stars'
import NextAppointment from './components/nextAppointment'
import { SafeAreaView} from 'react-native-safe-area-context';

export default function Main() {
  return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <NextAppointment style={{flex:.5}}/>
          <View style={styles.review}>
            <View style={styles.titleText}> 
              <Text style={styles.titleText}>
                What Did you think of your experince at Food Pantry?
              </Text>
              <Text style={styles.titleText}>
                Rate your experience
              </Text>
            </View>
            <View style={styles.reviewcontainer}>
              <Text style={{fontSize:20}}>
                OVERALL
              </Text>
              <StarRating/>
            </View>
            <View style={styles.reviewcontainer}>
              <Text style={{fontSize:20}}>
                FOOD QUALITY
              </Text>
              <StarRating/>
            </View>
            <View style={styles.reviewcontainer}>
              <Text style={{fontSize:20}}>
                FOOD QUANTITY
              </Text>
              <StarRating/>
            </View>
            <View style={styles.reviewcontainer}>
              <Text style={{fontSize:20}}>
                ACCESSIBILITY
              </Text>
              <StarRating/>
            </View>
            <View style={styles.reviewcontainer,{flexDirection:"row"}}>
              <View style={{flex:1,paddingHorizontal:20}}>
              <Button color="#ff7900" title={"Additional comments"}/>
              </View>
              <View style={{flex:.5,paddingHorizontal:20}}>
              <Button color="#ff7900" title="Submit" onPress =
              {() => Alert.alert(
                'Submitted',
                'Thank you for the input!',
                [{text: 'OK'}]
              )}/>
              </View>
            </View>

          </View>
        </ScrollView>

      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: ,
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop:  
  },
  titleText: {
    fontSize: 18,
    color: '#ff7900',
    paddingLeft: 20,
    // paddingTop: 10
  },
  review: {
    // flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  reviewcontainer: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop:20,  
    paddingBottom:20,
    justifyContent: 'center',
    // borderBottomWidth:  StyleSheet.hairlineWidth
  }
});