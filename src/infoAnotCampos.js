import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Tab, Tabs } from 'native-base';

export default class AnotCampos extends Component {
    
    constructor(props) {
        super(props);

        const dataCliente = [];
        this.state = {
            dataCliente: dataCliente,
            selecteditem: null,
            snackbarVisible: false,
            confirmVisible: false
        };
    }

    state = {
        expanded: true,
        firstQuery: ''
    }

    render() {
        
        return (
            
            <ScrollView style={{ backgroundColor: 'white' }}>
                
                
                <View style={styles.container}>
                    
                    <Tabs initialPage={0}>  

                        <Tab heading="Info 1"> 
                            <Text style={styles.titulo}> Gerais </Text>
                            <Text style={styles.info}>Data da Amostra</Text>
                            <Text style={styles.info}>Dias Após Emergência</Text>
                            <Text style={styles.info}>(%) de Desfolha</Text>
                            <Text style={styles.info}>Estádio da Cultura</Text>
                        </Tab>

                        <Tab heading="Info 2"> 
                            <Text style={styles.titulo}> Flutuação das Pragas </Text>
                            <Text style={styles.info}>Inseto Praga</Text>
                            <Text style={styles.info}>Tamanho</Text>
                            <Text style={styles.info}>Média Encontrada</Text>
                        </Tab>

                        <Tab heading="Info 3">
                            <Text style={styles.titulo}> Doença das Pragas </Text> 
                            <Text style={styles.info}>Inseto Praga</Text>
                            <Text style={styles.info}>Média Encontrada</Text>
                        </Tab>

                        <Tab heading="Info 4">
                            <Text style={styles.titulo}> Inimigo Naturais de Pragas </Text> 
                            <Text style={styles.info}>Inimigo Naturais de Pragas</Text>
                            <Text style={styles.info}>Média Encontrada</Text>
                        </Tab>

                    </Tabs>
                        
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    info: {
        fontSize: 15,
        padding: 2,
        marginTop: 15,
    },
    titulo: {
        padding: 5,
        fontSize: 21,
        textAlign: 'center',
    },
});