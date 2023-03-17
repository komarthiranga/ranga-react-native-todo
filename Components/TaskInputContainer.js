import { StyleSheet, TextInput, SafeAreaView, Button, Image, Modal } from 'react-native';
import React, { useState } from 'react';
const TaskInputContainer = ({visible, hideTaskModal, addTask}) => {
    const [task, setTask] = useState({
        id: '',
        description: ''
    })

    const taskInputHandler = (text) => {
        setTask({
          id: Math.random().toString(),
          description: text
        })
    }

    return (
        <Modal animationType="slide" visible={visible}>
           <SafeAreaView style={styles.appContainer}>
              <Image source={require("../assets/img/task2.jpeg")} style={styles.imageContainer} />
              <TextInput placeholder="Enter Task" style={styles.inputContainer} placeholderTextColor="#CCCCCC" onChangeText={taskInputHandler} />
              <SafeAreaView style={styles.actionListContainer}> 
                  <Button title="Cancel" color="#B2B2B2" onPress={hideTaskModal} />
                  <Button title="Create Task" onPress={addTask.bind(this, task)} />
              </SafeAreaView>
           </SafeAreaView>   
        </Modal>

    )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: '#cccccc',
        padding: 15,
        width: '80%',
        margin: 12,
        color: 'white'
      },
      actionListContainer: {
        flexDirection: 'row',
        gap: 15
      },
      imageContainer: {
        width: 100,
        height: 100,
        margin: 5
      }
})

export default TaskInputContainer;