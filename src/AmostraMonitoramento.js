import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { List } from 'react-native-paper';

export default class AmostraMonitoramento extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
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
                
                    <View>

                        <List.Section>
                            <List.Accordion
                                title="18-10-2019"
                                style={{padding:0}}
                                left={props => <List.Icon {...props} icon="table" />}
                                onPress={() => this.props.navigation.navigate('')} 
                            />
                            
                            <List.Accordion
                                title="22-10-2019"
                                style={{padding:0}}
                                left={props => <List.Icon {...props} icon="table" />}
                                onPress={() => this.props.navigation.navigate('')} 
                            />
                                
                        </List.Section>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: 'center',
    }
});