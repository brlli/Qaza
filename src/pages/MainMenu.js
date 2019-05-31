import React , {Component} from 'react';
import {View,Text,TouchableHighlight,ImageBackground} from 'react-native';
import MainStyle from '../assets/css/MainMenu.css';
import Image from '../components/image';

export default class MainMenu extends Component
{
    static navigationOptions={
        title:"صفحه اصلی",
        headerTitleStyle:{fontFamily:"yekan",textAlign: 'center',alignSelf:'center',fontWeight: 'normal'},
        headerStyle:{backgroundColor:'rgba(102, 102, 153,.3)',textAlign: 'center'},
    };
    constructor(){
        super();
        let json = require("./../data/Countrys.json");
        this.result = json;
    }


    render()
    {
        const {navigate} = this.props.navigation;
        return(
            <ImageBackground source={Image.country} style={{width:'100%',height:'100%'}}>
            <View style={MainStyle.main}>
                <TouchableHighlight style={[{marginTop:'50%'},MainStyle.mainbutton]} underlayColor={"#33cccc"}
                                    onPress={()=>navigate('CountryList',{result:this.result})} >
                    <Text style={MainStyle.textbutton} >ورود به برنامه</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[{marginTop:'10%'},MainStyle.mainbutton]} underlayColor={"#33cccc"}
                                    onPress={()=>navigate('AboutUs')} >
                    <Text style={MainStyle.textbutton}>نویسندگان</Text>
                </TouchableHighlight>

            </View>
            </ImageBackground>
        )
    }
}