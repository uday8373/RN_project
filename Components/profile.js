import React from 'react'
import { View, Text, Button, StyleSheet, Dimensions, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window')

export default function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <View style={styles.container2}>
                    <Image
                        style={styles.Logo}
                        source={require('./Images/soumen.jpg')}
                    />
                </View>
                <View style={styles.container3}>
                    <Text style={styles.container6}>Soumen Pal</Text>
                    <Text style={styles.container7}>Fashion Model</Text>
                </View>
            </View>
            <View style={styles.container4}>
                <View>
                    <Icon style={styles.container8} name="phone" size={20} />
                </View>
                <View>
                    <Text style={styles.container9}>+(91)7029028591</Text>
                </View>
            </View>
            <View style={styles.container4}>
                <View>
                    <Icon style={styles.container8} name="envelope-open" size={20} />
                </View>
                <View>
                    <Text style={styles.container9}> palsoumen7@gmail.com</Text>
                </View>
            </View>
            <View style={styles.container5}>
                <View style={styles.container14}>
                    <Text style={styles.container16}>$140.00</Text>
                    <Text>wallet</Text>
                </View>
                <View style={styles.container15}>
                    <Text style={styles.container17}>12</Text>
                    <Text>Orders</Text>
                </View>
            </View>
            <View style={styles.container4}>
                <View>
                    <Icon style={styles.container10} name="heart" size={20} />
                </View>
                <View>
                    <Text style={styles.container11}>Your Favourite</Text>
                </View>
            </View>
            <View style={styles.container4}>
                <View>
                    <Icon style={styles.container10} name="google-wallet" size={20} />
                </View>
                <View>
                    <Text style={styles.container11}>Payment</Text>
                </View>
            </View>
            <View style={styles.container4}>
                <View>
                    <Icon style={styles.container10} name="users" size={20} />
                </View>
                <View>
                    <Text style={styles.container11}>Tell your friends</Text>
                </View>
            </View>
            <View style={styles.container4}>
                <View>
                    <Icon style={styles.container10} name="address-card" size={20} />
                </View>
                <View>
                    <Text style={styles.container11}>Promomtion</Text>
                </View>
            </View>
            <View style={styles.container4}>
                <View>
                    <Icon style={styles.container10} name="cog" size={20} />
                </View>
                <View>
                    <Text style={styles.container11}>Setting</Text>
                </View>
            </View>
            <View style={styles.container4}>
                <View>
                    <Icon style={styles.container12} name="power-off" size={20} />
                </View>
                <View>
                    <Text style={styles.container13}>Log Out</Text>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 5,
        margin: 5
    },
    Logo: {
        width: 100,
        height: 100,
        padding: 5,
        margin: 5,
        borderRadius: 50
    },
    container1: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        padding: 10,
        margin: 10
    },
    container4: {
        flexDirection: 'row',
        padding: 10,
        margin: 10
    },
    container5: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container3: {
        padding: 10,
        margin: 15
    },
    container6: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#000080"
    },
    container7: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#778899"
    },
    container8: {
        paddingLeft: 5,
        paddingRight: 5,
        marginLeft: 5,
        marginRight: 5,
        color: "#778899"
    },
    container9: {
        paddingLeft: 5,
        paddingRight: 5,
        marginLeft: 5,
        marginRight: 5,
        fontWeight: "bold",
        color: "#778899"
    },
    container10: {
        paddingLeft: 5,
        paddingRight: 5,
        marginLeft: 5,
        marginRight: 5,
        color: "#191970"
    },
    container11: {
        paddingLeft: 5,
        paddingRight: 5,
        marginLeft: 5,
        marginRight: 5,
        fontWeight: "bold",
        color: "#191970",
    },
    container12: {
        paddingLeft: 5,
        paddingRight: 5,
        marginLeft: 5,
        marginRight: 5,
        color: "red"
    },
    container13: {
        paddingLeft: 5,
        paddingRight: 5,
        marginLeft: 5,
        marginRight: 5,
        fontWeight: "bold",
        color: "red"
    },
    container14: {
        height:100,
        width:"50%",
        alignItems:"center",
        marginVertical:10,
        borderColor: '#C4C6CB',
        borderWidth: 1,
        borderLeftWidth:0,
        paddingTop:25
    },
    container15: {
        height:100,
        width:"50%",
        alignItems:"center",
        marginVertical:10,
        borderColor: '#C4C6CB',
        borderWidth: 1,
        borderRightWidth:0,
        paddingTop:25
    },
    container16: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#191970"
    },
    container17: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#191970"
    }
})
