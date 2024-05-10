import React, {useState, useEffect, useRef} from "react";
import { View, TextInput} from "react-native";

interface ToDoItemProps {
    todo: {
        id: number,
        content: string,
        isCompleted: boolean,
    },
    onSubmit: () => void,
    removeItem: () => void
}

const ToDoItem = ({todo, onSubmit, removeItem}: ToDoItemProps) => {
    
    const [content, setContent] = useState('');

    const input = useRef(null)

    useEffect (() => {
        if(!todo) {return}
        setContent(todo.content)
    },[todo])

    useEffect (() => {
        if(input.current){
            setTimeout(() => {
                input?.current?.focus()
            }, 0)
        }  
    },[input])


    const onKeyPress = ({nativeEvent}) => {
        if(nativeEvent.key === 'Backspace' && content === "" ) {
            removeItem()
        }
    }

  return (
    <View style={{ flexDirection: "row", alignItems: "flex-start", marginVertical: 3 }}>
      {/* Text Input */}
      <TextInput
        ref={input}
        value={content}
        blurOnSubmit={true}
        onSubmitEditing={() => (content.length >= 1) ? onSubmit() : console.warn('Content is required')}
        onKeyPress={onKeyPress}
        onChangeText={setContent}
        multiline={true}
        style={{
          flex: 1,
          fontSize: 18,
          color: "black",
          marginLeft: 12,
        }}
      />
    </View>  
  );
};

export default ToDoItem;
