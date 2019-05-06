import {StyleSheet} from 'react-native';

 const Description = StyleSheet.create(
    {
            main:
                {
                backgroundColor:'#046e42',
                    padding:10,

            },
              FoodName:{
                  fontWeight: 'bold',
                  fontSize:24,
                  color:"black",
                  fontFamily:"B-nazannin"
              },
             Title:{
                  fontSize: 20,
                  color:"black",
                 fontFamily: "B-nazannin",
                 fontWeight: 'bold',
                 marginTop: 10,
                 marginBottom: 15,
                },
            Material:{
                fontSize: 20,
                color:"black",
                fontFamily: "B-nazannin",
                },

            Ingredients:
                {
                    marginTop:15,
                    marginBottom: 10,
                    textAlign: 'justify',
                },
            Prepared:
                {
                    marginTop:15,
                    marginBottom: 10,

                },
            PreparedText:
                {
                    fontFamily: "B-nazannin",
                    color:"black",
                    fontSize:20,
                }
    }
);
 export default Description;