import React, { useState } from 'react';
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'

export default function AddTodo({submitHandler}) {

    const [text,setText] = useState('');

    const changeHandler = (val) =>{
        setText(val);
    }
    return(
        <View>
            <TextInput
                placeholder='add to do...'
                value={text}
                style={styles.input}
                onChangeText={changeHandler}
            />
            <Button
                title='Add Todo'
                color='black'
                onPress={()=>{submitHandler(text);setText('')}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#999',
      },
})