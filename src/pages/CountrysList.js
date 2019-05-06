import React , {Component} from 'react';
import {ScrollView} from 'react-native';
import Form from '../components/Form';
export default class CountryList extends Component
{
    static navigationOptions={
        title:"لیست کشور ها",
        headerStyle:{backgroundColor:'rgb(198, 247, 165)'},
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

        return(
            <ScrollView style={{backgroundColor:'#046e42'}} >
                {
                    Object.keys(this.result).map(
                    (x)=>(<Form key={x} result={this.result[x]} C={this.Click} />
                    ))
                }
            </ScrollView>
        )
    }
}