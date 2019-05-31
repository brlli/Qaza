import {StyleSheet} from 'react-native';

const MainStyle = StyleSheet.create({
    main:{
        width:'100%' ,
        height:'100%' ,
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
        backgroundColor:'rgba(102, 153, 153,.3)',
        borderRadius:10,


    },
    textbutton:{
        fontFamily:"yekan",
        fontSize:18,
    },
});
export default  MainStyle;