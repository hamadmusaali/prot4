import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, Picker, Button,Dimensions } from 'react-native';
import { Container, Tab, Tabs } from 'native-base';
import { TextInput } from 'react-native-paper';
import { FontAwesome } from "@expo/vector-icons";
import CalendarPicker from 'react-native-calendar-picker';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import KeyboardShift from './Keyboard';


const window = Dimensions.get('window');

export default class NovaAmostra extends React.Component {

    state = {
        desfolha: '',
        text: ''
    }

    constructor(props) {
        super(props);
        this.state = {
            selectedStartDate: null,
            visible: false,
        };
        this.onDateChange = this.onDateChange.bind(this);
    }

    onDateChange(date) {
        this.setState({
            selectedStartDate: date,
        });
    }
    render() {
        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';

        return (
		<KeyboardShift>
		{() => (
		<Container>
            <ScrollView style={{ backgroundColor: 'white' }}>                               
               
                    <Tabs initialPage={0}>                    
                    <Tab heading="Step 1">
                        <View style={styles.container}>                          
                            <Text style={{ fontWeight: 'bold', fontSize: 15, padding: 5, color: 'skyblue' }}>UR: Bortoldo</Text>
                            <Text style={{ fontSize: 18, padding: 3}}> Dados de amostragem </Text>

                            <TouchableWithoutFeedback>
                                <View style={{paddingTop:20}}>
                                    <Text style={{ fontWeight: 'bold', paddingRight: 120 }}>Data da coleta:</Text>
                                    
                                        <CalendarPicker
                                            onDateChange={this.onDateChange}
                                        />
                                        <View>
                                            <Text>Data selecionada:{startDate}</Text>
                                        </View>
                                </View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{padding: 15, marginRight: 30, fontWeight: 'bold'}}>Estádio da cultura:</Text>
                                    <Picker
                                        style={styles.icones}
                                        selectedValue={this.state.language}
                                        style={{ height: 50, width: 100, marginLeft: 25 }}
                                        onValueChange={(itemValue, itemIndex) =>
                                            this.setState({ language: itemValue })
                                        }>
                                    
                                    </Picker>
                                </View>
                            </TouchableWithoutFeedback>
							<TouchableWithoutFeedback>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{padding: 15, fontWeight: 'bold'}}>% de Desfolha (em números inteiros):</Text>
                                    <TextInput style={styles.inputD}
									placeholder="0,00%" value={this.state.desfolha}
									onChangeText={(desfolha) => this.setState({ desfolha })}
									keyboardType = 'numeric' maxLength={5} />
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        </Tab>
												
                        <Tab heading="Step 2">   
                        <View style={styles.container}>
							<Text style={{ fontWeight: 'bold', fontSize: 15, padding: 5, color: 'skyblue' }}>UR: Bortoldo</Text>
                            <Text style={{ fontSize: 18, padding: 3}}> Flutuação das Pragas </Text>
							<Text style={{ fontSize: 13, padding: 3}}> Insetos Pragas (Informe a média encontrada) </Text>
                            <TouchableWithoutFeedback>						
							<View>								
								<TextInput
								  label="Lagarta Da Soja (Anticarsia Gemmtalis)"
								  style={styles.input}
								  returnKeyType='next'
								  placeholder="0,00"
								  keyboardType = 'numeric' maxLength={5}
								/>
								<TextInput
								  label="Falsa Madideira (Chrysodeixis spp.)"
								  style={styles.input}
								  returnKeyType='next'
								  placeholder="0,00"
								  keyboardType = 'numeric' maxLength={5}
								/>
								<TextInput
								  label="Lagarta Das Vagens (Spodoptera spp.)"
								  style={styles.input}
								  placeholder="0,00"
								  keyboardType = 'numeric' maxLength={5}
								/>
								<TextInput
								  label="Grupo Heliothinae"
								  style={styles.input}
								  placeholder="0,00"
								  keyboardType = 'numeric' maxLength={5}
								/>
							    </View>						
							</TouchableWithoutFeedback>
                            </View>
                        </Tab>
						
						<Tab heading="Step 3">   
                        <View style={styles.container}>
							<Text style={{ fontWeight: 'bold', fontSize: 15, padding: 5, color: 'skyblue' }}>UR: Bortoldo</Text>							
                            <Text style={{ fontSize: 18, padding: 3}}> Doenças das Pragas </Text>
							<Text style={{ fontSize: 13, padding: 3}}> Insetos Pragas (Informe a média encontrada) </Text>
                            <TouchableWithoutFeedback>						
							<View>								
								<TextInput
								  label="Lagarta c/ Nomura rileyi (Doença Branca)"
								  style={styles.input}
								  returnKeyType='next'
								  placeholder="0,00"
								  keyboardType = 'numeric' maxLength={5}
								/>
								<TextInput
								  label="Lagarta c/ Baculovírus (Doença Preta)"
								  style={styles.input}
								  returnKeyType='next'
								  placeholder="0,00"
								  keyboardType = 'numeric' maxLength={5}
								/>
							    </View>						
							</TouchableWithoutFeedback>
                            </View>
                        </Tab>
						
						<Tab heading="Step 4">   
                        <View style={styles.container}>
							<Text style={{ fontWeight: 'bold', fontSize: 15, padding: 5, color: 'skyblue' }}>UR: Bortoldo</Text>
							<View style={{flexDirection: 'row'}}>
							<Button title="Cancel" color="gray" />
                            <Text style={{ fontSize: 18, paddingRight: 30, paddingLeft: 30}}> Inimigos Naturais </Text>
							<Button title="Save" color="green"/>
							</View>
							<Text style={{ fontSize: 13, padding: 3}}> Insetos Pragas (Informe a média encontrada) </Text>
                            <TouchableWithoutFeedback>						
							<View>								
								<TextInput
								  label="Calosoma Granulatum"
								  style={styles.input}
								  returnKeyType='next'
								  placeholder="0,00"
								  keyboardType = 'numeric' maxLength={5}
								/>
								<TextInput
								  label="Callida Sp."
								  style={styles.input}
								  returnKeyType='next'
								  placeholder="0,00"
								  keyboardType = 'numeric' maxLength={5}
								/>
								<TextInput
								  label="Callida Scutellaris"
								  style={styles.input}
								  returnKeyType='next'
								  placeholder="0,00"
								  keyboardType = 'numeric' maxLength={5}
								/>
								<TextInput
								  label="Lebia Concina"
								  style={styles.input}
								  returnKeyType='next'
								  placeholder="0,00"
								  keyboardType = 'numeric' maxLength={5}
								/>
								<TextInput
								  label="Eriopsis Connexa"
								  style={styles.input}
								  returnKeyType='next'
								  placeholder="0,00"
								  keyboardType = 'numeric' maxLength={5}
								/>
								<TextInput
								  label="Cycloneda Sanguinea"
								  style={styles.input}
								  returnKeyType='next'
								  placeholder="0,00"
								  keyboardType = 'numeric' maxLength={5}
								/>
								<TextInput
								  label="Podius Sp."
								  style={styles.input}
								  returnKeyType='next'
								  placeholder="0,00"
								  keyboardType = 'numeric' maxLength={5}
								/>
								<TextInput
								  label="Podius Sp."
								  style={styles.input}
								  returnKeyType='next'
								  placeholder="0,00"
								  keyboardType = 'numeric'maxLength={5}
								/>
							    </View>						
							</TouchableWithoutFeedback>
                            </View>
                        </Tab>
                      </Tabs>                  
                   
					</ScrollView>
				</Container> 
			)}
			</KeyboardShift>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center'
    },
    icones: {
        paddingLeft: 15,
        flex: 1,
        flexDirection: 'row',
        paddingTop: 6
    },
	container1: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	input: {
		height: 50,
		borderWidth: 0.5,
		borderColor: "gray",
		marginHorizontal: 10,
		marginVertical: 5,
		width: window.width - 30,
	},
	inputD: {
		borderWidth: 0.5,
		borderColor: "gray",
		height: 50,
		width: 85
	}
});

