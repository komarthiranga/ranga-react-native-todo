import { FlatList, SafeAreaView } from 'react-native';
import Task from './Task';

const TaskList = ({tasks, deleteTask}) => {
    return(
        <SafeAreaView>
            <FlatList data={tasks} renderItem={ (tasks) => <Task task={tasks.item} deleteTask={deleteTask}  keyExtractor={(item) => item.id } />} />
        </SafeAreaView>

    )
}

export default TaskList;