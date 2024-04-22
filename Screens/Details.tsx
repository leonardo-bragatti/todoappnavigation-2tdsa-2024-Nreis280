import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import {RootStackParamList} from '../App';

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({ route }: DetailsScreenProps) => {
const { task } = route.params;

return (
<View>
    <Text>Nome da Tarefa: {task.name}</Text>
    <Text>Criada em: {task.createdAt.toLocaleTimeString()} No Dia: {task.createdAt.toLocaleDateString()}</Text>
    <Text>Finalizada: {task.isFinished ? 'Sim' : 'Não'}</Text>
</View>
);
};

export default Details;