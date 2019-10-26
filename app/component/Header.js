import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Header() {
    return (
        <View style={styles.headercontainer}>
            <Text style={styles.headertext}>알려드림</Text>
        </View>
    );
        

};
const styles = StyleSheet.create({
    headcontainer: {
      marginTop : 50,
      marginBottom:50,
      
    },
    headertext: {
      fontSize : 40,
      fontWeight : 'bold',
      color :'#00FFFF'
    }
});