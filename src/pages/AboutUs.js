import React , {Component} from 'react';
import {View,Text} from 'react-native';
export default class AboutUs extends Component
{
    static navigationOptions={
        title:"نویسندگان",
        headerTitleStyle:{fontFamily:"yekan",textAlign: 'center',alignSelf:'center',fontWeight: 'normal'},
        headerStyle:{backgroundColor:'rgba(102, 102, 153,.3)'},
    };
    render()
    {
        return(
            <View style={{backgroundColor: 'rgb(163, 195, 247)',height:'100%'}}>
                <Text
                style={{marginTop:100,textAlign: 'center',fontSize:24}}>علی کریمی</Text>
                <Text style={{marginTop:100,textAlign: 'center',fontSize:24}} >مهدی ابراهیمی</Text>
            </View>
        )
    }
}