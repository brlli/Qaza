import {StyleSheet} from 'react-native';

 const Description = StyleSheet.create(
    {
              main:{
                  backgroundColor: 'rgba(102, 153, 153,0.1)',
              },

              FoodName:{
                  fontSize:24,
                  color:"black",
                  fontFamily:"yekan",
                  marginLeft:10,
                  marginTop:10
              },
             Title:{
                  fontSize: 20,
                  color:"black",
                 fontFamily: "yekan",
                 marginTop: 10,
                 marginBottom: 15,
                 marginLeft:10,
                },
            Material:{
                fontSize: 20,
                color:"black",
                fontFamily: "yekan",
                marginLeft:15,
                },

            Ingredients:
                {
                    marginTop:15,
                    marginBottom: 10,
                    textAlign: 'left',
                },
            Prepared:
                {
                    marginTop:15,
                    marginBottom: 10,

                },
            PreparedText:
                {
                    fontFamily: "yekan",
                    color:"black",
                    fontSize:18,
                    textAlign: 'right',
                    paddingRight:10,
                    paddingLeft:10,
                    lineHeight:25

                },
        background: {
                width:'100%',
            height:'100%',

        }
    }
);
 export default Description;