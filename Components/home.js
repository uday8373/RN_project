import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home() {

  const navigation = useNavigation()

  const goToSignup = () => {
    navigation.navigate('Signup')
    // alert("123")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Choose your area</Text>
      <View style={styles.container1}>
        <View style={styles.row}>

          <View style={styles.box}>
            <Icon name="shopping-cart" size={32} style={styles.icons} />
            <Text style={styles.texts}>Buying</Text></View>


          <View style={styles.box}


          ><Icon name="home" size={32} style={styles.icons} />
            <Text style={styles.texts}>Selling</Text></View>
        </View>
        <View style={styles.row}>

          <View style={styles.box}


          ><Icon name="briefcase" size={32} style={styles.icons} />
            <Text style={styles.texts}>Trends</Text></View>


          <View style={styles.box}


          ><Icon name="play-circle" size={32} style={styles.icons} />
            <Text style={styles.texts}>vedios</Text></View>
        </View>
        <View style={styles.row}>

          <View style={styles.box}


          ><Icon name="percent" size={32} style={styles.icons} />
            <Text style={styles.texts}>Deals</Text></View>


          <View style={styles.box1}


          ><Icon name="book" size={32} style={styles.icons} />
            <Text style={styles.texts}>Case study</Text></View>
        </View>
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => goToSignup()}><Text style={styles.btntxt}>Go to signup</Text></TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "2%",
    // padding:"5%"

    // alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  box: {
    width: "48%",
    borderWidth: 1,
    padding: "15%",
    borderRadius: 15,
    backgroundColor: "#702DE6",
    borderColor: "#702DE6"

  },

  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: "4%"
  },
  container1: {
    margin: "2%",

  },
  datePickerIcon: {
    position: 'absolute',
    right: '5%',
    top: '45%'
  },
  icons: {
    color: "white",
    textAlign: 'center'
  },
  texts: {
    textAlign: 'center',
    color: "white",
    paddingTop: 10

  },
  box1: {
    width: "48%",
    borderWidth: 1,
    padding: "12%",
    paddingTop: "15%",
    borderRadius: 15,
    backgroundColor: "#702DE6",
    borderColor: "#702DE6"
  },
  btn: {
    borderWidth: 2,
    borderRadius: 20,
    width: "50%",
    height: "8%",
    marginLeft: "25%",
    backgroundColor: "white",
    borderColor: "#702DE6",
    
  },
  btntxt: {
    textAlign: 'center',
    padding: "8%",
    fontWeight: 'bold',
    fontSize: 16,
    color: "#702DE6"
  }

})
