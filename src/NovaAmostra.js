import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, Button, Dimensions, Picker } from 'react-native';
import { Container, Tab, Tabs } from 'native-base';
import { CheckBox } from 'react-native-elements'
//import { Checkbox } from 'react-native-paper';
import { FontAwesome } from "@expo/vector-icons";
import CalendarPicker from 'react-native-calendar-picker';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import KeyboardShift from './Keyboard';
import data1 from '../json/teste.json';
import Select2 from 'react-native-select-two';


const window = Dimensions.get('window');

const mockData = [
    { id: 1, name: 'React Native Developer' },
    { id: 2, name: 'Android Developer' },
    { id: 3, name: 'iOS Developer' }
];

export default class NovaAmostra extends React.Component {

    state = {
        desfolha: '',
        text: '',
        checked: false,
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

        const userList = {
            "123":"Tom",
            "124":"Michael",
            "125":"Christin"
          }
		
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
                            <Text style={{ fontSize: 18, padding: 3}}> Data da Coleta </Text>

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

                        </View>
                        </Tab>
												
                        <Tab heading="Step 2">   
                        <View style={styles.container}>
							<Text style={{ fontWeight: 'bold', fontSize: 15, padding: 5, color: 'skyblue' }}>UR: Bortoldo</Text>
                            <Text style={{ fontSize: 18, padding: 3}}> Dados no Coletor de Esporos </Text>
							
                            <TouchableWithoutFeedback>						
								<View>								
								
							    </View>						
							</TouchableWithoutFeedback>
                            </View>
                        </Tab>
						
						<Tab heading="Step 3">   
                        <View style={styles.container}>
							<Text style={{ fontWeight: 'bold', fontSize: 15, padding: 5, color: 'skyblue' }}>UR: Bortoldo</Text>							
                            <Text style={{ fontSize: 18, padding: 3}}> Dados na Inspeção Foliar </Text>
							
                            <TouchableWithoutFeedback>						
                                <View style={{flexDirection: 'column'}}>
                                    <Text style={{padding: 15, marginRight: 30, fontWeight: 'bold'}}>Estádio das plantas:</Text>
                                    <Picker
                                        style={styles.icones}
                                        selectedValue={this.state.language}
                                        style={{ height: 50, width: 100, marginLeft: 25 }}
                                        onValueChange={(itemValue, itemIndex) =>
                                            this.setState({ language: itemValue })
                                        }>
                                        <Picker.Item label="V1" value="V1" />
                                        <Picker.Item label="V2" value="V2" />
                                        <Picker.Item label="V3" value="V3" />
                                        <Picker.Item label="V4" value="V4" />
                                        <Picker.Item label="V5" value="V5" />
                                            
                                        
                                    </Picker>

                                    <Select2
                                        isSelectSingle
                                        style={{ borderRadius: 5 }}
                                        colorTheme={'blue'}
                                        popupTitle='Select item'
                                        title='Select item'
                                        data={mockData}
                                        onSelect={data => {
                                            this.setState({ data });
                                        }}
                                        onRemoveItem={data => {
                                            this.setState({ data });
                                        }} 
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
                            <Text style={{ fontSize: 18, paddingRight: 5, paddingLeft: 5}}> Dados Aplicação Fungicidas</Text>
							<Button title="Save" color="green"/>
							</View>
							
                            <TouchableWithoutFeedback>						
								<View style={{ paddingTop: 30 }}>
									<View >
                                        <CheckBox
                                            title="Aplicou para Ferrugem Asiática?"
                                            checked={this.state.checked}
                                            onPress={() => this.setState({ checked: !this.state.checked })}
                                        />			
									
                                        <CheckBox
                                            title="Aplicou para Outras Doenças?"
                                            checked={this.state.checked}
                                            onPress={() => this.setState({ checked: !this.state.checked })}
                                        />		
									</View>

									<Text style={{ fontWeight: 'bold', paddingRight: 120, paddingTop: 30 }}>Data da Aplicação do Fungicida:</Text>
									
									<CalendarPicker
                                    	onDateChange={this.onDateChange}
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

