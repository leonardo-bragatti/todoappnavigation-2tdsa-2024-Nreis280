import React, { useState } from "react";
import { TextInput, FlatList, Button, View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

export type Task = {
name: string;
createdAt: Date;
isFinished: boolean;
};

const ListaTarefa = ({ navigation }: NativeStackScreenProps<RootStackParamList>) => {
const [taskName, setTaskName] = useState("");
const [tasks, setTasks] = useState<Task[]>([]);

const addTask = () => {
    // Aqui estamos Verificndo se o nome da tarefa está vazio ou se tem pelomenos 3 caracteres
if (taskName.trim().length === 0 || taskName.trim().length < 3) {
    
    alert("O nome da tarefa deve ter pelo menos 4 caracteres.");
    return;
}

const newTask: Task = {
name: taskName,
createdAt: new Date(),
isFinished: false,
};
setTasks([...tasks, newTask]);
setTaskName("");
};

const clearTasks = () => {
setTasks([]);
setTaskName("");
};

return (
<View style={styles.container}>
    <TextInput
    style={styles.input}
    onChangeText={setTaskName}
    value={taskName}
    placeholder="Digite o nome da tarefa"
    />
    <View style={styles.buttonContainer}>
    <Button
        title="Adicionar"
        onPress={addTask}
        color="#98FB98"
    />
    <Button
        title="Limpar"
        onPress={clearTasks}
        color="#FA8072"
    />
    </View>
    <FlatList
    data={tasks}
    renderItem={({ item }) => (
        <Text style={styles.task} onPress={() => navigation.navigate('Details', { task: item })}>
        {item.name}
        </Text>
    )}
    keyExtractor={(item, index) => index.toString()}
    />
</View>
);
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E0FFFF',
},
input: {
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
},
buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
},
task: {
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#F0FFFF',
    color: '#333',
    borderWidth: 1,
    borderColor: '#696969',
    borderRadius: 5,
},
});


export default ListaTarefa;