import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export default function Input({value, changeText, addTodoItem}) {
    return (
        <TextInput style = {styles.input}
            value = {value}
            onChangeText={changeText}
            onEndEditing = {addTodoItem}
            placeholder={"오늘 할 일을 입력하세요."}
            maxLength={30}
            returnKeyType="done"/>
    );
        

};

const styles = StyleSheet.create({
    
    input: {
      fontSize : 20,
      fontWeight : 'bold',
      color :'#00FFFF',
      marginTop :10,
      marginBottom:20,

    }
});