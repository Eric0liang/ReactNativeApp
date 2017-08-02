import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

class PizzaTranslator extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        let display = this.state.text === 'pizza' ? 'delicious' : this.state.text === 'finish' ? 'very delicious' : ' ';
        return (
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                    multiline={false}
                    onSubmitEditing={(event) => this.setState({text:'finish'})}
                />

                <Text style={{padding: 10, fontSize: 42}}>{display}</Text>
            </View>
        );
    }
}
AppRegistry.registerComponent('reactnativeapp', () => PizzaTranslator);