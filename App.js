import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from './src/components/cabecalho';
import Botao from './src/components/botao';

export default function App() {
  return (
    <View>
      <Cabecalho></Cabecalho>
      <View style={{marginHorizontal:10},{marginTop:10}}>
      <Botao
      Logo= "game-controller"
      texto="Jogos Gratuitos"
      cor="black"
      Logo2= "book"
      texto2="Livros"
      Cor2="red"
      />

    <Botao
      Logo= "ios-headset-sharp"
      texto="Músicas"
      cor="blue"
      Logo2= "ios-logo-android"
      texto2="Apps"
      Cor2="orange"
      />

    <Botao
      Logo= "videocam"
      texto="Filmes"
      cor="purple"
      Logo2= "game-controller"
      texto2="Jogos Pagos"
      Cor2="gray"
      />
</View>

    </View>
  );
}


