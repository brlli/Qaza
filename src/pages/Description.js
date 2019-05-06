import React , {Component} from 'react';
import {View,Text,ScrollView,Image} from 'react-native';
import image from "../components/image";
import styles from "../assets/css/Description.css";
export default class Description extends Component
{
    static navigationOptions=({navigation})=>({
        title:navigation.state.params.result.Name,
        headerStyle:{backgroundColor:'rgb(198, 247, 165)'}
    });

    render()
    {
        const {FoodImage,Ingredients,NameFood,Prepared} = this.props.navigation.state.params.result;

        return(
            <ScrollView style={styles.main}>
                <Image source={image[FoodImage]} style={{width:"100%",height:300}} />
                <Text style={styles.FoodName}>نام غذا:{NameFood}</Text>
                <View style={styles.Ingredients}>
                    <Text style={styles.Title}>مواد مورد نیاز</Text>
                    {Object.keys(Ingredients).map((x)=>(<Text key={x} style={styles.Material}>
                        {x+" : "+Ingredients[x]}
                    </Text>))}
                </View>
                <View style={styles.Ingredients}>
                    <Text style={styles.Title}>طرز تهیه</Text>
                    <Text style={styles.PreparedText}>{Prepared}</Text>
                </View>
            </ScrollView>
        )
    }
}