/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Button
} from 'react-native';

export default class AndroidIos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            id: '',
            address: '',
            uri: 'https://opentest.youtu.qq.com/content/img/product/ocr/ocr_id_02.jpg?v=2.0'
        };
    }
    onButtonPress = () => {
        //将网址作为参数传递给fetch
        fetch('http://api.youtu.qq.com/youtu/ocrapi/idcardocr', {
            //你可以指定header参数，或是指定使用POST方法，又或是提交数据等
            method: 'POST',
            headers: {
                'Accept': '*!/!*',
                'Content-Type': 'text/json',
                'user-agent': 'youtu-android-sdk',
                'Authorization': 'Zp0X4NG2VfmukwMYipvy/Ipp0fNhPTEwMDg3NjAyJms' +
                '9QUtJRDF2ZlJPYndmYU1DdWVGQU90UkNHUGcxS1daUjdLRjFuJmU9MTUwMj' +
                'k0MDQyNiZ0PTE1MDAzNDg0MjYmcj04MTMwNzQxOTgmdT04Mzk2NDMzOTg=',
            },
            body: JSON.stringify({
                'app_id': '10087602',
                'url': 'http://opentest.youtu.qq.com/content/img/product/ocr/ocr_id_02.jpg?v=2.0',
                'card_type': 0,
            })
            //处理服务器的响应数据
        }).then((response) => response.json())
            .then((responseJson) => {
                //var base64Icon = 'data:image/png;base64,' + responseJson.frontimage;
                this.setState({
                    name: responseJson.name,
                    id: responseJson.id,
                    address: responseJson.address,
                    //uri: base64Icon
                })
            })
            .catch((error) => {
                console.warn('fetch error')
            });
    };
    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri: this.state.uri}}
                       style={styles.image}/>
                <Button title="请求网络" onPress={this.onButtonPress}/>
                <View style={styles.id}>
                    <Text>{this.state.name}</Text>
                    <Text>{this.state.id}</Text>
                    <Text>{this.state.address}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    id: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
        marginTop: 20
    },
    image:{
        height: 200,
        width: 300,
        margin: 10,
    },
});
AppRegistry.registerComponent('reactnativeapp', () => AndroidIos);
