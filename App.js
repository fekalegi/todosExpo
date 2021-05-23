import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View, ToastAndroid } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';

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

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/*Form*/}
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
