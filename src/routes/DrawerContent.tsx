import { StyleSheet, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerContentComponentProps, DrawerItemList } from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Button
} from 'react-native-paper'
import {useAuthStore} from '../store/AuthStore'

const DrawerContent = (props: DrawerContentComponentProps) => {
    const {logOut} = useAuthStore((state) => state)

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.profileContainer}>
            <Avatar.Image size={90} source={require('../../assets/images/vote.png')}/>
            <Title style={styles.name}>John Cena</Title>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      {/* LOGOUT */}
      <View style={styles.logoutSection}>
        <Button textColor='#5d5b66' contentStyle={{paddingVertical: 8,flexDirection: 'row-reverse', justifyContent: 'space-between'}} icon="logout" mode="text" onPress={logOut}>
            Logout
        </Button>
      </View>
    </View>
  )
}

export default DrawerContent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E0FF'
    },
    profileContainer: {
        marginTop: 20,
        flex: 1,
        alignItems: 'center',
        borderBottomColor: '#DADADA',
        borderBottomWidth: 1,
        marginBottom: 10
    },
    name: {
        fontSize: 15,
        fontWeight: '600',
        paddingVertical: 5,
        color: '#1b1c27'
    },
    logoutSection: {
        borderTopColor: '#DADADA',
        borderTopWidth: 1,
    },
})