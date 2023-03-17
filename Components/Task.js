import { Text, SafeAreaView, StyleSheet, Pressable } from 'react-native';

const Task = ({task, deleteTask}) => {
    return (
        <SafeAreaView style={styles.taskWrapper}>
            <Pressable style={ (pressed ) => pressed.pressed ? styles.pressText : ''  } onPress={deleteTask.bind(this, task.id)} android_ripple="black">
                <Text style={styles.taskTextContainer}>{task.description}</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    pressText: {
        backgroundColor: 'black',
        opacity: 1
    },
    taskWrapper: {
       borderWidth: 1,
       margin: 5,
       backgroundColor: '#2A292A',
       borderRadius: 5,
       borderColor: '#2A292A'
    },
    taskTextContainer: {
        padding: 15,
        color: '#FFFFFF',
        fontWeight: 600
    }
})

export default Task;