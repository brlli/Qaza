import React , {Component} from 'react';
import {Text,View,Image,TouchableNativeFeedback,StyleSheet} from 'react-native';


export default class Form extends Component
{
render() {
    const {C,result} = this.props;
    return(
        <TouchableNativeFeedback onPress={()=>{C(result);}} >
        <View style={style.button}>
            <Image source={require('./../img/Iran.png')} style={style.image}/>
            <Text>{result.Name}</Text>
        </View>
        </TouchableNativeFeedback>
    )
}
}
const  style = StyleSheet.create({
   button:{

       flexDirection:'row',
       flexWrap:'wrap'

   },
    image:{
       margin:0,
        width: 100,
        height: 100,

    }
});