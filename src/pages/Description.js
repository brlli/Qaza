import React , {Component} from 'react';
import {View,Text,ScrollView,Image} from 'react-native';
import image from "../components/image";
export default class Description extends Component
{
    static navigationOptions=({navigation})=>({title:navigation.state.params.result.Name});

    render()
    {
        const {FoodImage,Ingredients,NameFood,Prepared} = this.props.navigation.state.params.result;

        return(
            <ScrollView style={{margin:10}}>
                <Image source={image[FoodImage]} style={{width:"100%",height:300}} />
                <Text>نام غذا:{NameFood}</Text>
                <View>

                </View>
            </ScrollView>
        )
    }
}