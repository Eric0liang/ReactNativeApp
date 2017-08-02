import React, {Component} from 'react';
import {AppRegistry, Image, Text, View} from 'react-native';

class Bananas extends Component {
    render() {
        //样例一
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View style={{alignItems: 'center'}}>
                <Image source={pic} style={{width: 193, height: 110}}/>
                <Greeting name='Rexxar'/>
                <Greeting name='Jaina'/>
                <Greeting name='Valeera'/>
            </View>
        );
    }
}
//样例二
class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}
AppRegistry.registerComponent('reactnativeapp', () => Bananas);