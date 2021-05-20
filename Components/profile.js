import React from 'react'
import { View, Text, Button,StyleSheet ,Dimensions,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window')

export default function Profile(){
return(
   
<View style={styles.container}>
<View style={styles.wrap}>
<View style={styles.row}>
<View style={styles.container5}>
<Image
style={styles.Logo}
source={require('./../images/abc.jpg')}

/>
</View>
<View style={styles.container4}>
<Text style={styles.test}> Emma Phillips</Text>
<Text style={styles.fashion}>Fashion Model</Text>
</View>
</View>
<View style={styles.ephone}>
<View style={styles.row}>
<View style={styles.container1}>
<Icon style={styles.icon} name="phone" size={18}/>
</View>
<View style={styles.container2}>
<Text style={styles.test1}>(581)-307-6902</Text>
</View>
</View>
</View>
<View style={styles.row}>
<View style={styles.container1}>
<Icon style={styles.icon} name="envelope-open" size={20}/>
</View>
<View style={styles.container2}>
<Text style={styles.test1}> emma.phillips@gmail.com</Text>
</View>
</View>
</View>
<View style={styles.row}>
<View style={styles.container3}>
<Text style={styles.doller}>$140.00 </Text><Text style={styles.wallet}> wallet</Text>
</View>
<View style={styles.container10}>
<Text style={styles.doller}>12 </Text><Text style={styles.wallet}> Orders</Text>
</View>
</View>
<View style={styles.wrap}>
<View style={styles.row}>
<View style={styles.container1}>
<Icon  style={styles.icon1} name="heart" size={20}/>
</View>
<View style={styles.container2}>
<Text style={styles.names}>Your Favourite</Text>
</View>
</View>
<View style={styles.row}>
<View style={styles.container1}>
<Icon style={styles.icon1} name="credit-card-alt" size={20}/>
</View>
<View style={styles.container2}>
<Text style={styles.names}>Payment</Text>
</View>
</View>
<View style={styles.row}>
<View style={styles.container1}>
<Icon style={styles.icon1} name="users" size={20}/>
</View>
<View style={styles.container2}>
<Text style={styles.names}>Tell your friends</Text>
</View>
</View>
<View style={styles.row}>
<View style={styles.container1}>
<Icon style={styles.icon1} name="address-card" size={20}/>
</View>
<View style={styles.container2}>
<Text style={styles.names}>Promomtion</Text>
</View>
</View>
<View style={styles.row}>
<View style={styles.container1}>
<Icon style={styles.icon1} name="cog" size={20}/>
</View>
<View style={styles.container2}>
<Text style={styles.names}>Setting</Text>
</View>
</View>
</View>
<View style={styles.row2}>

<View style={styles.container1}>
<Icon style={styles.icon2} name="power-off" size={20}/>
</View>
<View style={styles.container2}>
<Text style={styles.names1}>Log Out</Text>
</View>

</View>

</View>


)
}

const styles = StyleSheet.create({
container: {
flex: 1,
// marginHorizontal: width * 0.06,
backgroundColor:"white"
// alignItems: 'center'
},

row: {
flexDirection: 'row',
justifyContent: 'space-between',
marginVertical:10,

},
container1:{
height:30,
width:"10%",

},
container2:{
height:30,
width:"90%",

},
container3:{
    
        height:85,
        width:"50%",
        alignItems:"center",
        marginVertical:2,
        borderColor: '#C4C6CB',
        borderWidth: 1,
        borderLeftWidth:0,
        paddingTop:10
},
container10:{
    
    height:85,
    width:"50%",
    alignItems:"center",
    marginVertical:2,
    borderColor: '#C4C6CB',
    borderWidth: 1,
    borderRightWidth:0,
    paddingTop:10
},
container6:{
height:100,
width:"50%",
alignItems:"center",
marginVertical:10,
borderWidth: 1,
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
borderRadius:50
},
test:{
fontSize:22,
fontWeight:"bold",
color:"#353A82"
},
test1:{
fontSize:15,
color:"gray"
},
ephone:{
    padding:0
},
icon:{
    color:"gray"
},
fashion:{
    color:"gray",
    marginRight:40
},
doller:{
    fontSize:18,
    fontWeight:'bold',
    marginTop:12,
    color:"#353A82"
},
wallet:{
    color:"gray",
    marginTop:6
},
names:{
    fontSize:15,
color:"#353A82",
fontWeight:'bold'
},
names1:{
    fontSize:15,
color:"red",
fontWeight:'bold',
marginTop:10,
marginLeft:21
},
icon1:{
color:"#7B82E4"
},
icon2 :{
color:"red",
marginTop:10,
marginLeft:21
},
wrap:{
     marginHorizontal: width * 0.06,
},
row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical:1,
    borderColor: '#C4C6CB',
    borderTopWidth:1
    },

})