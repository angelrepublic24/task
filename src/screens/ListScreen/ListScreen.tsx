import { StyleSheet, TextInput, FlatList, ScrollView } from 'react-native';
import React, {useState} from 'react';
import ToDoItem from '../../components/ToDoItem';



export default function ListScreen() {
  const [title, setTitle] = useState('')

  const [todos, setTodos] = useState([{
    id: 1,
    content: 'Buy milk',
    isCompleted: true
  },{
    id: 2,
    content: 'Buy cereal',
    isCompleted: false
  }, {
    id: 3,
    content: 'Pour milk',
    isCompleted: false
  },
  {
    id: 4,
    content: 'Get a spoon',
    isCompleted: false
  },
  {
    id: 5,
    content: 'Eat it',
    isCompleted: false
  }
])

const createNewItem = (atIndex: number) => {
  let newTodos = [...todos];
  console.warn(newTodos)
  if(!todos) return;
  newTodos.splice(atIndex, 0, {
    id: todos.length + 1,
    content: '',
    isCompleted: false
  })

  setTodos(newTodos);
}

const removeItem = (atIndex: number) => {
  let todo = [...todos]

  let removeTodo = todo.filter(todo => todo.id !== atIndex);
  setTodos(removeTodo);
}

  return (
    <ScrollView style={styles.container}>
      <TextInput 
      style={styles.title} 
      placeholder={'Title'}
      onChangeText={setTitle} 
      />
      <FlatList 
        nestedScrollEnabled={true}
        scrollEnabled={false}
        data={todos}
        renderItem={({item, index}) => (
          <ToDoItem  
            todo={item} 
            onSubmit={() => createNewItem(index + 1)}
            removeItem={() => removeItem(index)}
          />
        )}
        style={{width: '100%'}}
      />
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '100%',
    color: 'black',
    marginBottom: 12
  },
});
