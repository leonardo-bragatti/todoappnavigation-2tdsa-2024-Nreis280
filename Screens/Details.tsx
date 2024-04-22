import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View, StyleSheet } from 'react-native';
import { RootStackParamList } from '../App';

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({ route }: DetailsScreenProps) => {
const { task } = route.params;

return (
<View style={styles.container}>
    <Text style={styles.text}>Nome da Tarefa: {task.name}</Text>
    <Text style={styles.text}>
    Criada em: {task.createdAt.toLocaleTimeString()} No Dia:{' '}
    {task.createdAt.toLocaleDateString()}
    </Text>
    <Text style={styles.text}>
    Finalizada: {task.isFinished ? 'Sim' : 'Não'}
    </Text>
</View>
);
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0FFFF',
},
text: {
    color: '#333',
    marginBottom: 10,
},
});

export default Details;