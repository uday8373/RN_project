import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
// import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Settings() {

//   const navigation = useNavigation()

//   const goToSignup = () => {
//     navigation.navigate('Signup')
//     // alert("123")
//   }

  return (
      <View style={styles.container}>
        
         <Icon name="cogs" size={200} style={styles.icons} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "20%",
    justifyContent:'center'
    // padding:"5%"

    // alignItems: 'center'
  },
  icons:{
      color:"#C4C6CB",

  }
  

})
