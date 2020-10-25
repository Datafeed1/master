import { Button, StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {Component} from 'react';

// Font.loadAsync({
//   'Montserrat': require('.../')
// })
class upComing extends Component{
    render (){
        return (
            <View style={styles.upComing}>
                <Text style={styles.titleText}>
                UPCOMING APPOINTMENT
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
        )
    }
}
 
export default upComing;

const styles = StyleSheet.create({
  upComing: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: '',
    // justifyContent: 'center',
  },
  titleCard: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#c2d500',
    color: "#fff"
  },
  titleText: {
    fontSize: 18,
    color: 'orange',
    paddingLeft: 20,
    // fontFamily: "Montserrat-Medium"
  },
  titlecontainer: {
    flex: 1,
    backgroundColor: '#c2d500',
    color: "#fff"
  },
  
});