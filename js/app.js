import React, {Component} from 'react';
import {AppRegistry, Image, View} from 'react-native';

export default class ImageStatic extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent:'center'
            }}>
                <Image source={require('../image/web.png')} style={{flex: 1}}/>
            </View>
        );
    }
}
AppRegistry.registerComponent('reactnativeapp', () => ImageStatic);
