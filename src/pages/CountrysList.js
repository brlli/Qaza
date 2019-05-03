import React , {Component} from 'react';
import {View,Text,Image} from 'react-native';
import Form from './../components/Form';
export default class CountryList extends Component
{
    static navigationOptions={
        title:"لیست کشور ها"
    };
    render()
    {
        const {navigate} = this.props.navigation;
        return(
            <View >

                <Form navigation={this.props.navigation} />
            </View>
        )
    }
}