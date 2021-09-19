import React from 'react';
import {StyleSheet, Text, View} from 'react-native'

export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.text}>My Todo App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height:90,
        paddingTop:40,
        backgroundColor:'black',
    },
    text:{
        color:'#ccc',
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',

    }
})