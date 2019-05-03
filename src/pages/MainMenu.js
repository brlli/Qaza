import React , {Component} from 'react';
import {View,Text,TouchableHighlight} from 'react-native';
import MainStyle from '../assets/css/MainMenu.css';

export default class MainMenu extends Component
{
    static navigationOptions={
        title:"صفحه اصلی",
    };


    render()
    {
        const {navigate} = this.props.navigation;
        return(
            <View style={MainStyle.main}>
                <TouchableHighlight style={[{marginTop:'50%'},MainStyle.mainbutton]} underlayColor={"#33cccc"}
                                    onPress={()=>navigate('CountryList')} >
                    <Text style={MainStyle.textbutton} >غذا ها</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[{marginTop:'10%'},MainStyle.mainbutton]} underlayColor={"#33cccc"}
                                    onPress={()=>navigate('AboutUs')} >
                    <Text style={MainStyle.textbutton}>درباره ما</Text>
                </TouchableHighlight>

            </View>
        )
    }
}