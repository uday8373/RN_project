import React, { useEffect } from 'react';
import { View, Text, Button,StyleSheet,Dimensions,TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';



// const {width, height} = Dimensions.get('window')

export default function Home() {

  // const navigation = useNavigation()

  // const goToSignup = () => {
  //   navigation.navigate('Signup')
  // }

  const navigation = useNavigation()

  useEffect(() => {
    updateHeader()
  })

  const HeaderLeft = () => (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ marginLeft: 10 }}>
      <Icon name="bars" size={32} style={styles.icons} />
    </TouchableOpacity>
  )
  const updateHeader = () => {
    navigation.setOptions({ headerLeft: () => <HeaderLeft /> });
  }


  return (
    <View style={styles.container}>
      <Text style={styles.container5}>Choose your area</Text>
      <View style={styles.container1}>
        <View style={styles.container2}>
          <Icon style={{color:"#FFFFFF"}} name="shopping-cart" size={50} color="gray" />
          <Text style={{color:"#FFFFFF"}}>Buying</Text>
        </View>
        <View style={styles.container3}>
          <Icon style={{color:"#6A5ACD"}} name="home" size={50} color="gray" />
          <Text style={{color:"#6A5ACD"}}>Selling</Text>
        </View>
      </View>
      <View style={styles.container1}>
        <View style={styles.container3}>
          <Icon style={{color:"#6A5ACD"}} name="briefcase" size={50} color="gray" />
          <Text style={{color:"#6A5ACD"}}>Trades</Text>
        </View>
        <View style={styles.container3}>
          <Icon style={{color:"#6A5ACD"}} name="play-circle" size={50} color="gray" />
          <Text style={{color:"#6A5ACD"}}>Videos</Text>
        </View>
      </View>
      <View style={styles.container1}>
        <View style={styles.container3}>
          <Icon style={{color:"#6A5ACD"}} name="percent" size={50} color="gray" />
          <Text style={{color:"#6A5ACD"}}>Deals</Text>
        </View>
        <View style={styles.container3}>
          <Icon style={{color:"#6A5ACD"}} name="book" size={50} color="gray" />
          <Text style={{color:"#6A5ACD"}}>Case study</Text>
        </View>
      </View>

      {/* <Button title="Go to signup" onPress={goToSignup} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: width * 0.06,
    backgroundColor:'#F0F8FF',
    // alignItems: 'center',
    padding:5,
    margin: 5
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: "center"
  },
  container2:{
    width: '45%',
    alignItems: "center",
    backgroundColor: "#6A5ACD",
    padding: 30,
    shadowColor:"#C0C0C0",
    borderRadius: 20,
    marginBottom: 30,
    marginLeft:10,
    marginRight: 10,
    marginTop:10
  },
  container3:{
    width: '45%',
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 30,
    shadowColor:"#C0C0C0",
    borderRadius: 20,
    marginBottom: 30,
    marginLeft:10,
    marginRight: 10,
    marginTop:10
  },
  container5:{
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle:"italic",
    textAlign: "left",
    marginBottom: 50
  },

  



})