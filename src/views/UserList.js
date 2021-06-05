import React from 'react'
import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements'
import users from '../data/users'

export default props => {

    function getUserItem({ item: user }) {
        return (
            <ListItem
                key={user.id}
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm')}
            >
                <Image source={{ uri: user.avatarUrl }} style={styles.image} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        borderRadius: 20,
        height: 40,
        width: 40
    }
})