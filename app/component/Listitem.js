import React from 'react';
import {StyleSheet, Text, View, Dimensions,TouchableOpacity} from 'react-native';
import {AntDesign} from '@expo/vector-icons';


export default function Listitem({name, isComplete, changeComplete, deleteItem}) {
    return (
        <View style={styles.listitembox}>
            <View style = {styles.makerow}>
                <TouchableOpacity onPress={changeComplete}>
                    <AntDesign name={isComplete? "checkcircle":"close"} size ={20} style = {styles.checkmargin}/>
                </TouchableOpacity>
            
                <Text style={styles.item}>{name}</Text>
            </View>
            <TouchableOpacity>
                <AntDesign onPress={deleteItem} name="close" size ={20} />
            </TouchableOpacity>
        </View>
    );
        

};
const{width,height} = Dimensions.get('window')
const styles = StyleSheet.create({
    listitembox: {
      borderBottomWidth:1,
      padding:5,
      marginTop:10,
      width : width -60,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      color :'#00FFFF',
    },
    item:{
        fontSize:30,
        fontWeight:'bold',

    },
    makerow:{
        flexDirection:'row',
    },
    checkmargin: {
        marginRight :20,
    },
});