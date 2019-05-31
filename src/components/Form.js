import React , {Component} from 'react';
import {Text,View,Image,TouchableNativeFeedback,StyleSheet} from 'react-native';
import image from "./image";

export default class Form extends Component
{
render() {
    const {C,result} = this.props;
    return(
        <TouchableNativeFeedback  onPress={()=>{C(result);}} style={style.body} >
        <View style={style.button}>
            <Image source={image[result.Image]} style={style.image}/>
            <Text style={style.buttonText}>{result.Name}</Text>
        </View>
        </TouchableNativeFeedback>
    )
}
}
const  style = StyleSheet.create({
   button:{

       flexDirection:'row',
       flexWrap:'wrap',
       backgroundColor:'rgba(128, 128, 128,0.35)',
       marginTop:5,
       borderRadius: 10,
       fontFamily: "yekan",

   },
    image:{
        marginRight:40,
        width: 100,
        height: 100,
        borderRadius:15,


    },
    buttonText: {
       textAlign: 'right',
        fontSize:20,
        fontFamily: "yekan",
        marginTop:30,
        marginLeft:20,


    },
    body:{
       marginTop: 10,
    }

});