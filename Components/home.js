import React from 'react'
import { View, Text, Button,StyleSheet ,Dimensions} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window')

export default function Home() {
  const navigation = useNavigation()
  const goToSignup = () => {
    navigation.navigate('Signup')
  }
 
  return (
    <View style={styles.container}>
      <Text>Choose Your area</Text>
      <View style={styles.row}>
       <View style={styles.container1}>
         <Icon name="shopping-cart" size={50}/>
        <Text>Buying</Text>
        </View>
        <View style={styles.container1}>
        <Icon name="house-user" size={50}/>
        <Text>Selling</Text>
        </View>
      </View>
      <View style={styles.row}>
       <View style={styles.container1}>
       <Icon name="shopping-bag" size={50}/>
        <Text>Trades</Text>
        </View>
        <View style={styles.container1}>
        <Icon name="play-circle" size={50}/>
        <Text>Video</Text>
        </View>
      </View>
      <View style={styles.row}>
       <View style={styles.container1}>
       <Icon name="shopping-cart" size={50}/>
        <Text>Deals</Text>
        </View>
        <View style={styles.container1}>
        <Icon name="book-medical" size={50}/>
        <Text>Case Study</Text>
        </View>
      </View>
      <Button  title="Go to signup" onPress={goToSignup} />
     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: width * 0.06,
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container1:{
    height:150,
    width:"45%",
    alignItems:"center",
    marginHorizontal:10,
    marginVertical:10,
    paddingTop:30,
    borderRadius:10,
    backgroundColor:"#5B7DF0"
  },
  
})
