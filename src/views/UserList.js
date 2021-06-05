import React from 'react'
import { View, FlatList, Image, StyleSheet, Alert } from 'react-native'
import { ListItem, Button, Icon } from 'react-native-elements'
import users from '../data/users'

export default props => {

    function getUserItem({ item: user }) {

        function confirmUserDeletion(user) {
            Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
                {
                    text: 'Sim',
                    onPress() {
                        console.warn('delete ' + user.id)
                    }
                },
                {
                    text: 'Não'
                }
            ])
        }

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
                <View style={styles.actionsButtons}>
                    <Button
                        onPress={() => {
                            props.navigation.navigate('UserForm', user);
                        }}
                        type="clear"
                        icon={<Icon name="edit" size={25} color="orange" />}
                    />
                    <Button
                        onPress={() => { confirmUserDeletion(user) }}
                        type="clear"
                        icon={<Icon name="delete" size={25} color="red" />}
                    />
                </View>
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
    },
    actionsButtons: {
        flexDirection: 'row'
    }
})