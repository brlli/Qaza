import React , {Component} from 'react';
import {Text,View,Image,TouchableNativeFeedback,StyleSheet} from 'react-native';


export default class Form extends Component
{
render() {
    const {navigate} = this.props.navigation;
    return(
        <TouchableNativeFeedback onPress={()=>{navigate('Description',{cdata:{text:"سیبسبسیبسیب\nبسیبسیبسیبسیبسیسب\n",title:"ایران",body:"dfdfsdfdfdsf"}})}} >
        <View style={style.button}>
            <Image source={require('./../img/Iran.png')} style={style.image}/>
            <Text>ایران</Text>
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