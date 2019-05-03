import React , {Component} from 'react';
import {View,Text} from 'react-native';

export default class Description extends Component
{
    static navigationOptions=({navigation})=>({title:navigation.state.params.cdata.title});

    render()
    {
        const {text,body} = this.props.navigation.state.params.cdata;
        return(
            <View>
                <Text>{text+body}</Text>
            </View>
        )
    }
}