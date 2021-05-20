import React from 'react'
import { View, Text, Button,StyleSheet ,Dimensions,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window')

export default function Profile(){
    return(
        
        <View style={styles.container}>
        <Text style={{textAlign:"center"}}> Profile page</Text>
        <View style={styles.row}>
         <View style={styles.container5}>
         <Image
        style={styles.Logo}
        source={require('./../images/Pic1.png')}
      />
          </View>
          <View style={styles.container4}>
          <Text style={styles.test}> Emma Phillips</Text>
          <Text style={styles.test3}>Fashion Model</Text>
          </View>
        </View>
        <View style={styles.row}>
         <View style={styles.container1}>
         <Icon name="phone" size={18}/>
          </View>
          <View style={styles.container2}>
          <Text style={styles.test3}>+(91)9685741236</Text>
          </View>
        </View>
        <View style={styles.row}>
         <View style={styles.container1}>
          <Icon name="envelope-open" size={20}/>
          </View>
          <View style={styles.container2}>
          <Text style={styles.test3}> md.raja@brainiuminfotech.com</Text>
          </View>
        </View>
        <View style={styles.row}>
         <View style={styles.container3}>
          <Text style={styles.test4}>$140.00 </Text>
           <Text>wallet</Text>
          </View>
          <View style={styles.container6}>
          <Text style={styles.test4}>{" "}12 </Text>
          <Text>Orders</Text>
          </View>
        </View>
        <View style={styles.row}>
         <View style={styles.container1}>
          <Icon name="heart" size={20}/>
          </View>
          <View style={styles.container2}>
          <Text style={styles.test1}>Your Favourite</Text>
          </View>
        </View>
        <View style={styles.row}>
         <View style={styles.container1}>
          <Icon name="wallet" size={20}/>
          </View>
          <View style={styles.container2}>
          <Text style={styles.test1}>Payment</Text>
          </View>
        </View>
        <View style={styles.row}>
         <View style={styles.container1}>
          <Icon name="users" size={20}/>
          </View>
          <View style={styles.container2}>
          <Text style={styles.test1}>Tell your friends</Text>
          </View>
        </View>
        <View style={styles.row}>
         <View style={styles.container1}>
          <Icon name="address-card" size={20}/>
          </View>
          <View style={styles.container2}>
          <Text style={styles.test1}>Promomtion</Text>
          </View>
        </View>
        <View style={styles.row}>
         <View style={styles.container1}>
          <Icon name="cog" size={20}/>
          </View>
          <View style={styles.container2}>
          <Text style={styles.test1}>Setting</Text>
          </View>
        </View>
        <View style={styles.row2}>
         <View style={styles.container1}>
          <Icon name="power-off" size={20} style={{color:"red"}}/>
          </View>
          <View style={styles.container2}>
          <Text style={{fontSize:15,color:"red"}}>Log Out</Text>
          </View>
        </View>
        </View>
       
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: width * 0.06,
     
    
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical:10
    },
    row2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical:10,
        borderColor: '#C4C6CB',
        borderTopWidth:1
      },
    container1:{
      height:30,
      paddingTop:5,
      width:"10%", 
    },
    container2:{
        height:30,
        width:"90%",
      },
      container3:{
        height:100,
        width:"50%",
        alignItems:"center",
        marginVertical:10,
        borderColor: '#C4C6CB',
        borderWidth: 1,
        borderLeftWidth:0,
        paddingTop:25
      },
      container6:{
        height:100,
        width:"50%",
        alignItems:"center",
        marginVertical:10,
        borderColor: '#C4C6CB',
        borderWidth: 1,
        borderRightWidth:0,
        paddingTop:25
      },
   
      container5:{
        height:100,
        width:"30%",
        alignItems:"center",
        marginVertical:10,
       
      },
      
      container4:{
        height:100,
        width:"70%",
        paddingTop:25,
        alignItems:"center",
        marginVertical:10
      },
      Logo: {
        width: 100,
        height: 100,
      },
      test:{
          fontSize:22,
          fontWeight:"bold",
          color:"#353A82"
      },
      test1:{
          fontSize:15,
          fontFamily: "Cochin",
          color:"#353A82"
      },
      test3:{
          color:"gray"
      },
      test4:{
          fontSize:20
      }
      
     
    
    
  })