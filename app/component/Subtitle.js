import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Subtitle({title}) {
    return (
        <View>
            <Text style = {styles.subtitletext}>{title}</Text>
        </View>
    );
        

};
const styles = StyleSheet.create({
    
    subtitletext: {
      fontSize : 30,
      fontWeight : 'bold',
      color :'#00FFFF'
    }
});