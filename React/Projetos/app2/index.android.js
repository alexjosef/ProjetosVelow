//Import
import React from 'react';
import { AppRegistry, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

//Formatações
const Estilos = {
	principal: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	botao: {
		backgroundColor: '#538530',
		paddingVertical: 10,
		paddingHorizontal: 50,
		marginTop: 20
	},
	textoBotao: {
		color: '#FFF',
		fontSize: 16,
		fontWeight: 'bold'
	}
};

const gerarNovaFrase = () => {
	var numAleatorio = Math.random();
	numAleatorio = Math.floor(numAleatorio * 5);

	var frases = Array();
	frases[0] = 'Não deixe que as pessoas te façam desistir daquilo que você mais quer na vida. Acredite. Lute. Conquiste. E acima de tudo, seja feliz.';
	frases[1] = 'Não importa o que você decidiu. O que importa é que isso te faça feliz. Não importa o que você decidiu. O que importa é que isso te faça feliz.';
	frases[2] = 'Se a vida não ficar mais fácil, trate de ficar mais forte.';
	frases[3] = 'Se a caminhada está difícil, é porque você está no caminho certo.';
	frases[4] = 'Toda conquista começa com a decisão de tentar.';

	var fraseEscolhida = frases[numAleatorio];

	Alert.alert('', fraseEscolhida);
}

//Criar componente
const App = () => {

	const {	principal, botao, textoBotao } = Estilos;

	return (
		<View style={principal}>

			<Image source={require('./imgs/logo.png')}/>

			<TouchableOpacity 
				style={botao}
				onPress={gerarNovaFrase}>
				<Text style={textoBotao}>Nova frase</Text>
			</TouchableOpacity>
		</View>
	);	
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App);