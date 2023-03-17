import { StyleSheet, SafeAreaView, Button } from 'react-native';
import TaskInputContainer from './Components/TaskInputContainer';
import { useState } from 'react';
import TaskList from './Components/TaskList';
import { StatusBar} from "expo-status-bar"

export default function App() {
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [tasks, setTasks] = useState([]);


  const triggerCreateTaskModalHandler = () => {
    setShowTaskModal(true);
  }
  const hideTaskModalHandler = () => {
    setShowTaskModal(false);
  }

  const handleAddTask = (task, triggerTaskCompleteState) => {
    if(Object.keys(task).length > 1) {
      setTasks(currentTasks => [...currentTasks, ...[task]]);
      hideTaskModalHandler();
    }
  }

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter( task => task.id !== id ))
  }

  return (
    <>
    <SafeAreaView style={styles.appContainer}>
        <SafeAreaView style={styles.btnContainer}>
           <Button title="Add Task"  onPress={triggerCreateTaskModalHandler} />
        </SafeAreaView>
        <TaskInputContainer visible={showTaskModal} hideTaskModal={hideTaskModalHandler} addTask={handleAddTask} />
         <TaskList tasks={tasks} deleteTask={handleDeleteTask} />
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'black'
  } ,
   btnContainer: {
    margin: 12
   }
});
