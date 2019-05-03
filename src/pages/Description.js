import React , {Component} from 'react';
import {View,Text} from 'react-native';

export default class Description extends Component
{
    static navigationOptions={
        title:"درباره ما",
    };
    render()
    {
        return(
            <View>
                <Text>ali karimi</Text>
            </View>
        )
    }
}