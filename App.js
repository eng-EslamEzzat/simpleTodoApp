import React, {Component} from 'react';
import {Alert, FlatList, StyleSheet, Text, View,TouchableWithoutFeedback, Keyboard, Button} from 'react-native';
import AddTodo from './components/addTodo';
import Header from './components/header'
import TodoItem from './components/todo-item'
class app extends Component {

  state={
    todos: [
      { text: 'buy coffee', key: '1' },
      { text: 'create an app', key: '2' },
      { text: 'play on the switch', key: '3' }
    ],
  }

  pressHandler = key => {
    const todos = this.state.todos.filter(item=>(item.key != key))
    this.setState({
      todos
    })
  }

  submitHandler = (text)=>{
    text?this.setState({
      todos:[
        {text:text,key:Math.random.toString},
        ...this.state.todos
      ]
    }):Alert.alert('error!!','Please enter invalid data',[{
      text:'understood',onPress:()=>{console.log('alert is closeds')}
    }])
  }

  render(){
    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
      <View style={styles.container}> 
        <Header/>
        <View style={styles.content}>
          <AddTodo submitHandler={this.submitHandler}/>
          <View style={styles.button} >
            <Button title='Delete All' color='#b00' onPress={()=>this.setState({todos:[]})} />
          </View>
          <View style={styles.list}>
            <FlatList
              data={this.state.todos}
              renderItem={({ item })=>(
                <TodoItem item={item} pressHandler={this.pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
      </TouchableWithoutFeedback>
    )
  }
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ccc',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  content: {
    padding: 40,
    // backgroundColor: 'grey',
    flex: 1,
  },
  list:{
    marginTop:0,
    // backgroundColor: '#aaa',
    flex:1,
  },
  button:{
    marginTop:20,
    marginBottom:0,
    alignItems:'flex-end',
  },
})

export default app;