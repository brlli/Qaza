import React , {Component} from 'react';
import {View,Text,ScrollView,Image,ImageBackground} from 'react-native';
import image from "../components/image";
import styles from "../assets/css/Description.css";
export default class Description extends Component
{
    static navigationOptions=({navigation})=>({
        title:navigation.state.params.result.Name,
        headerTitleStyle:{fontFamily:"yekan",textAlign: 'center',alignSelf:'center',fontWeight: 'normal'},
        headerStyle:{backgroundColor:'rgba(102, 102, 153,.3)'},
    });

    render()
    {
        const {FoodImage,Ingredients,NameFood,Prepared} = this.props.navigation.state.params.result;

        return(
            <ImageBackground source={image.food} style={styles.background}>
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
                            <Text style={styles.PreparedText}>{Prepared.replace(/\./g,". \n")}</Text>
                        </View>

                </ScrollView>
            </ImageBackground>

        )
    }
}