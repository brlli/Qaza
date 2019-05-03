import React , {Component} from 'react';
import {View,Text,TouchableHighlight} from 'react-native';
import MainStyle from '../assets/css/MainMenu.css';
export default class MainMenu extends Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return(
            <View style={MainStyle.main}>
                <TouchableHighlight style={[{backgroundColor:'#98f441',marginTop:'50%'},MainStyle.mainbutton]} >
                    <Text style={MainStyle.textbutton} >غذا ها</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[{backgroundColor:'#98f441',marginTop:'10%'},MainStyle.mainbutton]}>
                    <Text style={MainStyle.textbutton}>نویسندگان</Text>
                </TouchableHighlight>

            </View>
        )
    }
}