import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StarRating from './components/stars'

export default function Main() {
  return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.upComing}>
            <Text style={styles.titleText}>
              UPCOMING APPOINTMNET
            </Text>
            <View style={styles.titleCard}>
              <View style={styles.titlecontainer}>
                <Text 
                  style={{color:"#fff",
                  fontSize:18,
                  paddingLeft:40,
                  paddingTop:20}}>
                  MON
                </Text>
                <Text 
                  style={{color:"#fff",
                  fontSize:24,
                  paddingLeft:40,}}>
                  26
                </Text>
              </View>
              <View style={styles.titlecontainer,{flex:2}}>
                <Text 
                  style={{color:"#fff",
                  fontSize:18,
                  paddingLeft:10,
                  paddingTop:20}}>
                  8:00 AM - 5:00 PM
                </Text>
                <Text 
                  style={{color:"#fff",
                  fontSize:14,
                  paddingLeft:10,}}>
                    Food Pantry
                </Text>
                <Text 
                  style={{color:"#fff",
                  fontSize:14,
                  paddingLeft:10,}}>
                    sample location
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.review}>
            <View style={styles.titleText}> 
              <Text style={styles.titleText}>
                What Did you think of your experince at Food Panry?
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
            <View style={styles.reviewcontainer}>
              <Button title={"Additional comments"}/>
            </View>
            <View style={styles.reviewcontainer}>
              <Button title={"Submit"}/>
            </View>
          </View>
        </ScrollView>

      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  upComing: {
    flex: .3,
    backgroundColor: '#fff',
    // alignItems: '',
    // justifyContent: 'center',
  },
  titleCard: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#8bc34a',
    color: "#fff"
  },
  titleText: {
    fontSize: 18,
    color: 'orange',
    paddingLeft: 20,
    paddingTop: 10
  },
  titlecontainer: {
    flex: 1,
    backgroundColor: '#8bc34a',
    color: "#fff"
  },
  review: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  reviewcontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop:20,  
    justifyContent: 'center',
  }
});