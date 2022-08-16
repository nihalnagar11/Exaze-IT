import React, { Component, useState } from 'react'
import { Button, View, TouchableOpacity, Text, StyleSheet, StatusBar, TextInput, NativeModules, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, changeCount } from './redux/actions';


const InputForm = ({ count, addTodo, deleteTodo, todo_list, changeCount }: any) => {

    // const handleAddTodo = () => {
    //     addTodo(task)
    //     setTask('')
    // }

    // const handleDeleteTodo = (id: any) => {
    //     deleteTodo(id)
    // }

    const navigation = useNavigation();

    const [name, setName] = useState('');

    const handlePress = () => {
        const nhl = name
        changeCount({ count: nhl })

        // Navigate to ButtonScreen and find value of header through Redux
        navigation.navigate('ButtonScreen');
        console.log(count)
    }

    const handleEmulator = () => {

        // Navigate to ButtonScreen and find value of header through navigation parameter
        navigation.navigate('CheckEmulator', {
            item: name
        });
    }
    return (
        <View style={{ backgroundColor: 'white', height: '100%' }}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#2196F3" translucent={true} />
            <View style={{
                flexDirection: 'row', width: '100%', height: '10%',
                backgroundColor: '#2196F3',
            }}>
                <Text style={styles.header}>
                    {count}
                </Text>
            </View>
            <View style={styles.container}>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Enter Your Name"
                    placeholderTextColor="grey"
                    autoCapitalize="none"
                    onChangeText={(_) => setName(_)} />
            </View>


            <View style={{ margin: 20, marginBottom: 0 }}>
                <Button
                    onPress={handlePress}
                    title="Register"
                    color="#2196F3"
                />
            </View>
            <View style={{ margin: 20, marginBottom: 0 }}>
                <Button
                    onPress={handleEmulator}
                    title="Check Emulator"
                    color="#2196F3"
                />
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: '20%'
    },
    header: {
        backgroundColor: '#2196F3',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: '10%',
        width: '100%',
        paddingLeft: '43%'
    },
    input: {
        margin: 15,
        height: 50,
        borderColor: '#2196F3',
        borderWidth: 1,
        width: '90%',
        borderRadius: 5,
        paddingLeft: 10
    },
})

const mapStateToProps = (state: any) => {
    return {
        // todo_list: state.todos.todo_list,
        count: state.todos.count
    }
}

const mapDispatchToProps = { addTodo, deleteTodo, changeCount }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InputForm)