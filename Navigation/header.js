import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native'


export default function HeaderLeft() {
    return (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ marginLeft: 10 }}>
            <Icon name="bars" size={32} style={styles.icons} />
        </TouchableOpacity>
    );
}