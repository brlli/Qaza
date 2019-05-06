import React , {Component} from 'react';
import {ScrollView} from 'react-native';
import Form from '../components/Form';
export default class ProvinceList extends Component
{
    static navigationOptions={
        title:"لیست استان ها",
        headerStyle:{backgroundColor:'rgb(198, 247, 165)'},
    };
    constructor(props) {
        super(props);
        this.Click = this.Click.bind(this);
        this.result  = props.navigation.state.params.result;
        this.state ={List:Object.keys(this.result)};
    }
    Click(result)
    {
        const {navigate} = this.props.navigation;
            navigate("Description",{result:result});

    }


    render()
    {
        return(
            <ScrollView style={{backgroundColor:'#046e42'}}>
                {
                    Object.keys(this.result).map((x)=>
                            (<Form key={x} result={this.result[x]} C={this.Click} />)
                    )
                }
            </ScrollView>
        )
    }
}