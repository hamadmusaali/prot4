import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, FlatList } from 'react-native';
import { List, Searchbar } from 'react-native-paper';
import { FontAwesome } from "@expo/vector-icons";
import { TouchableHighlight } from 'react-native-gesture-handler';
import data1 from '../json/teste.json'

export default class MonitoramentoFerrugem extends Component {
    
    constructor(props) {
        super(props);

        const dataCliente = [];
        this.state = {
            dataCliente: dataCliente,
            selecteditem: null,
            snackbarVisible: false,
            confirmVisible: false,
            isLoading: true,
        };
    }

   /* componentDidMount() {
        
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then( (response) => response.json() )
            .then( (responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies,
                })
            })

        .catch((error) => {
            console.log(error)
        });    
    }*/

    /*componentWillMount() {
		//requisção HTTP
		axios.get('https://facebook.github.io/react-native/movies.json')
            .then(response => { this.setState({ listaItens: response.data }); })
            .catch(() => { console.log('Erro ao recuperar os dados'); });
	}*/

    state = {
        expanded: true,
        firstQuery: ''
    }

    render() {

        const { firstQuery } = this.state;

        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={styles.container}>

                    <Searchbar
                        placeholder="Busca"
                        onChangeText={query => { this.setState({ firstQuery: query }); }}
                        value={firstQuery} 
                    />

                    <View>
                        <List.Section>
                            
                            <List.Accordion
                                
                                title="2016/2017"
                                style={{padding:0}}
                                left={props => <List.Icon {...props} icon="table" />}>
                                <TouchableWithoutFeedback>
                                <View style={styles.atributo}>
                                    <Text style={{fontWeight: 'bold', paddingRight: 137}}>Safra</Text>
                                    <View>
                                        <FlatList
                                            data={data1.teste1}
                                            keyExtractor={item => item.Safra}
                                            renderItem={({ item }) => {
                                                return (
                                                <View>
                                                    <Text style={styles.atributo}>{item.Safra}</Text>
                                                </View>
                                                );
                                            }}
                                        />
                                    </View>
                                </View>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback>
                                    <View style={styles.atributo}>
                                        <Text style={{fontWeight: 'bold', paddingRight: 116}}>Produtor</Text>
                                        <View>
                                        <FlatList
                                            data={data1.teste1}
                                            keyExtractor={item => item.Produtor}
                                            renderItem={({ item }) => {
                                                return (
                                                <View>
                                                    <Text style={styles.atributo}>{item.Produtor}</Text>
                                                </View>
                                                );
                                            }}
                                        />
                                        </View>
                                        
                                    </View>
                                </TouchableWithoutFeedback>

                                <TouchableWithoutFeedback>
                                    <View style={styles.atributo}>
                                        <Text style={{fontWeight: 'bold', paddingRight: 89}}>Identificação</Text>
                                        <View>
                                        <FlatList
                                            data={data1.teste1}
                                            keyExtractor={item => item.Identificação}
                                            renderItem={({ item }) => {
                                                return (
                                                <View>
                                                    <Text style={styles.atributo}>{item.Identificação}</Text>
                                                </View>
                                                );
                                            }}
                                        />
                                    </View>
                                    </View>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback>
                                    <View style={styles.atributo}>
                                        <Text style={{fontWeight: 'bold', paddingRight: 122}}>Cultivar</Text>
                                        <View>
                                        <FlatList
                                            data={data1.teste1}
                                            keyExtractor={item => item.Cultivar}
                                            renderItem={({ item }) => {
                                                return (
                                                <View>
                                                    <Text style={styles.atributo}>{item.Cultivar}</Text>
                                                </View>
                                                );
                                            }}
                                        />
                                    </View>
                                    </View>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback>
                                    <View style={styles.atributo}>
                                        <Text style={{fontWeight: 'bold', paddingRight: 82}}>Resp. Técnico</Text>
                                        <View>
                                        <FlatList
                                            data={data1.teste1}
                                            keyExtractor={item => item.ResponsávelTécnico}
                                            renderItem={({ item }) => {
                                                return (
                                                <View>
                                                    <Text style={styles.atributo}>{item.ResponsávelTécnico}</Text>
                                                </View>
                                                );
                                            }}
                                        />
                                    </View>
                                    </View>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback>
                                    <View style={styles.atributo}>
                                        <Text style={{fontWeight: 'bold', paddingRight: 108}}>Município</Text>
                                        <View>
                                        <FlatList
                                            data={data1.teste1}
                                            keyExtractor={item => item.Município}
                                            renderItem={({ item }) => {
                                                return (
                                                <View>
                                                    <Text style={styles.atributo}>{item.Município}</Text>
                                                </View>
                                                );
                                            }}
                                        />
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback>
                                    <View style={styles.icones}>
                                        <Text style={{fontWeight: 'bold', paddingRight: 130}}>Ações:</Text>
                                        
                                    </View>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback>
                                    <View style={styles.icones}>
                                        <Text style={{fontWeight: 'bold', paddingRight: 70}}>Amostra de Monitoramento</Text>
                                        <TouchableHighlight style={{ color: "gray" }} onPress={() => this.props.navigation.navigate('')}>
                                            <FontAwesome name="eye" size={20} />
                                        </TouchableHighlight>                                       
                                    </View>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback>
                                    <View style={styles.icones}>                                       
                                    <Text style={{fontWeight: 'bold', paddingRight: 35}}>Nova Amostra de Monitoramento</Text>
                                        <TouchableHighlight style={{ color: "gray" }} onPress={() => this.props.navigation.navigate('NovaAmostra')}>
                                            <FontAwesome name="bug" size={20} />
                                        </TouchableHighlight> 
                                    </View>
                                </TouchableWithoutFeedback>
                            </List.Accordion>
                            <List.Accordion
                                title="2017/2018"
                                style={{padding:0}}
                                left={props => <List.Icon {...props} icon="table" />}>
                                <TouchableWithoutFeedback>
                                <View style={styles.atributo}>
                                    <Text style={{fontWeight: 'bold', paddingRight: 137}}>Safra</Text>
                                    <View>
                                        <FlatList
                                            data={data1.teste2}
                                            keyExtractor={item => item.Safra}
                                            renderItem={({ item }) => {
                                                return (
                                                <View>
                                                    <Text style={styles.atributo}>{item.Safra}</Text>
                                                </View>
                                                );
                                            }}
                                        />
                                    </View>
                                    
                                </View>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback>
                                    <View style={styles.atributo}>
                                    <Text style={{fontWeight: 'bold', paddingRight: 116}}>Produtor</Text>
                                    <View>
                                        <FlatList
                                            data={data1.teste2}
                                            keyExtractor={item => item.Produtor}
                                            renderItem={({ item }) => {
                                                return (
                                                <View>
                                                    <Text style={styles.atributo}>{item.Produtor}</Text>
                                                </View>
                                                );
                                            }}
                                        />
                                    </View>
                                    
                                    </View>
                                </TouchableWithoutFeedback>

                                <TouchableWithoutFeedback>
                                <View style={styles.atributo}>
                                    <Text style={{fontWeight: 'bold', paddingRight: 89}}>Identificação</Text>
                                    <View>
                                        <FlatList
                                            data={data1.teste2}
                                            keyExtractor={item => item.Identificação}
                                            renderItem={({ item }) => {
                                                return (
                                                <View>
                                                    <Text style={styles.atributo}>{item.Identificação}</Text>
                                                </View>
                                                );
                                            }}
                                        />
                                    </View>
                                    
                                </View>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback>
                                <View style={styles.atributo}>
                                    <Text style={{fontWeight: 'bold', paddingRight: 122}}>Cultivar</Text>
                                    <View>
                                        <FlatList
                                            data={data1.teste2}
                                            keyExtractor={item => item.Cultivar}
                                            renderItem={({ item }) => {
                                                return (
                                                <View>
                                                    <Text style={styles.atributo}>{item.Cultivar}</Text>
                                                </View>
                                                );
                                            }}
                                        />
                                    </View>
                                   
                                </View>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback>
                                <View style={styles.atributo}>
                                    <Text style={{fontWeight: 'bold', paddingRight: 82}}>Resp. Técnico</Text>
                                    <View>
                                        <FlatList
                                            data={data1.teste2}
                                            keyExtractor={item => item.ResponsávelTécnico}
                                            renderItem={({ item }) => {
                                                return (
                                                <View>
                                                    <Text style={styles.atributo}>{item.ResponsávelTécnico}</Text>
                                                </View>
                                                );
                                            }}
                                        />
                                    </View>
                                   
                                </View>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback>
                                <View style={styles.atributo}>
                                    <Text style={{fontWeight: 'bold', paddingRight: 108}}>Município</Text>
                                    <View>
                                        <FlatList
                                            data={data1.teste2}
                                            keyExtractor={item => item.Município}
                                            renderItem={({ item }) => {
                                                return (
                                                <View>
                                                    <Text style={styles.atributo}>{item.Município}</Text>
                                                </View>
                                                );
                                            }}
                                        />
                                    </View>
                                    
                                </View>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback>
                                    <View style={styles.icones}>
                                        <Text style={{fontWeight: 'bold', paddingRight: 130}}>Ações:</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback>
                                    <View style={styles.icones}>
                                        <Text style={{fontWeight: 'bold', paddingRight: 70}}>Amostra de Monitoramento</Text>
                                        <TouchableHighlight style={{ color: "gray" }} onPress={() => this.props.navigation.navigate('')}>
                                            <FontAwesome name="eye" size={20} />
                                        </TouchableHighlight>                                       
                                    </View>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback>
                                    <View style={styles.icones}>                                       
                                    <Text style={{fontWeight: 'bold', paddingRight: 35}}>Nova Amostra de Monitoramento</Text>
                                        <TouchableHighlight style={{ color: "gray" }} onPress={() => this.props.navigation.navigate('NovaAmostra')}>
                                            <FontAwesome name="bug" size={20} />
                                        </TouchableHighlight> 
                                    </View>
                                </TouchableWithoutFeedback>
                            </List.Accordion>
                        </List.Section>

                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    atributo: {
        paddingLeft:15,
        flex: 1,
		flexDirection: 'row',
		
	},
    icones: {
        paddingLeft:15,
		flex: 1,
        flexDirection: 'row',
        paddingTop:6		
	}
});