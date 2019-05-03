import {StyleSheet} from 'react-native';

const MainStyle = StyleSheet.create({
    main:{
        width:'100%' ,
        height:'100%' ,
        backgroundColor: '#046e42',
        flex:1,
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent:'center'
    },
    mainbutton:{
        width: '80%',
        height: '15%',
        alignItems:'center',
        paddingTop:'7.5%',
        backgroundColor:'#98f441',


    },
    textbutton:{
      fontSize:18,
      fontWeight: 'bold',
    },
});
export default  MainStyle;