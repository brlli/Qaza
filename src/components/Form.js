import React , {Component} from 'react';
import {Text,View,Image,TouchableNativeFeedback,StyleSheet} from 'react-native';
import image from "./image";

export default class Form extends Component
{
render() {
    const {C,result} = this.props;
    return(
        <TouchableNativeFeedback  onPress={()=>{C(result);}} >
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
       backgroundColor:'rgba(255, 216, 145,0.8)'

   },
    image:{
        marginRight:40,
        width: 100,
        height: 100,

    },
    buttonText: {
       textAlign: 'center',
        fontSize:20,
        fontWeight: 'bold',
        fontFamily: 'B-nazannin',
        marginTop:30

    }

});