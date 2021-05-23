import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View, ToastAndroid, Alert } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Buy coffee', key:'1'},
    { text: 'Workout', key:'2'},
    { text: 'Get Some Rest', key:'3'},
  ])

  const pressHandler = (key) =>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.key != key)
    })
    ToastAndroid.show('Request sent successfully!', ToastAndroid.SHORT)
  }

  const submitHandler = (text) => {

    if(text.length > 3 ){

    setTodos((prevTodos) => {
      return [
        {text: text, key: Math.random().toString() },
        ...prevTodos
      ]
    })}
    else{
      Alert.alert('OOPS!','Todos must be over 3 characters long',[{
        text: 'understood', onPress: () => console.log('alert closed')
      }])
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,

  },
});
