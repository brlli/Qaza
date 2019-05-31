import React , {Component} from 'react';
import {Text,SectionList,ImageBackground} from 'react-native';
import Form from '../components/Form';
import Image from "./../components/image";
export default class CountryList extends Component
{
    static navigationOptions={
        title:"لیست کشور ها",
        headerTitleStyle:{fontFamily:"yekan",textAlign: 'center',alignSelf:'center',fontWeight: 'normal'},
        headerStyle:{backgroundColor:'rgba(102, 102, 153,.3)'},

    };

    constructor(props) {
        super(props);
        this.Click = this.Click.bind(this);
        this.result  = props.navigation.state.params.result;
    }
    Click(result)
    {
        const {navigate} = this.props.navigation;

        if(result.State)
            navigate("ProvinceList", {result: result.Provinces});

        else
            navigate("Description",{result:result});

    }

    render()
    {
        const key = Object.keys(this.result).sort();
        let data  = {};
        for(let item in key)
        {
            if(data[key[item][0]] === undefined)
            data[key[item][0]] = [key[item]];
            else
                data[key[item][0]].push(key[item])
        }
        let data2 = [];
        for(let k in data)
            data2.push({data:data[k],key:k});

        return(

            <ImageBackground source={Image.country} style={{width: '100%', height: '100%'}} >
            <SectionList
                sections={data2}
                renderItem={({item})=><Form   result={this.result[item]} C={this.Click} />}
                renderSectionHeader={({section})=><Text style={{fontSize:20,padding:10,color:'red',
                 backgroundColor: 'rgba(51, 102, 153,.30)',width:'30%',marginLeft:20,borderRadius:10,
                 marginTop:5,textAlign: 'center'
                }}>
                    {section.key}</Text>}
                keyExtractor={(item,index)=>index}
                />
            </ImageBackground>
        )
    }
}