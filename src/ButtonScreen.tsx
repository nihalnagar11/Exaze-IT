import React, { Component, useState, useEffect } from 'react'
import { Button, View, TouchableOpacity, Text, StyleSheet, StatusBar, Image, Alert } from 'react-native' 
import { RNSlidingButton, SlideDirection } from 'rn-sliding-button'; 
import { connect } from 'react-redux';
import { addTodo, deleteTodo, changeCount } from './redux/actions';



const ButtonScreen = ({ count,}:any) => {

    // use in your class
    const onSlideRight = () => {
        //perform Action on slide success.
        Alert.alert(
            "Button Title",
            "Button Slide to right",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    };

    return (
        <View style={{ height: '100%' }}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#2196F3" translucent={true} />
            <View>
                <Text style={styles.header}>
                    {count}
                </Text>
            </View>

            <Text style={{ textAlign: 'center' }}>
                4 Variation of a button
            </Text>

            <TouchableOpacity onPress={() => {
            }}>
                <Text style={styles.button}>
                    Press me
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
            }}>
                <Text style={styles.text}>
                    Press me
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
            }}>
                <Text style={styles.text1}>
                    Press me
                </Text>
            </TouchableOpacity>

            <RNSlidingButton
                style={{
                    width: '80%',
                    marginLeft: '10%',
                    marginTop: 20,

                    borderRadius: 10,
                    backgroundColor: 'black',
                }}
                height={60}
                onSlidingSuccess={onSlideRight}
                slideDirection={SlideDirection.RIGHT}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://www.freeiconspng.com/uploads/diamond-outline-4.png',
                        }}
                    />
                    <Text numberOfLines={1} style={styles.titleText}>
                        Slide me to continue
                    </Text>
                </View>
            </RNSlidingButton>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: {
        borderRadius: 10,
        padding: 18,
        backgroundColor: '#ccc',
        color: '#2196F3',
        alignSelf: 'center',
        marginTop: 10,
        width: '80%',
        alignItems: 'center',
        paddingLeft: '33%',
        fontWeight: 'bold'
    },
    button: {
        borderRadius: 5,
        padding: 18,
        color: '#2196F3',
        alignSelf: 'center',
        marginTop: 30,
        paddingLeft: 40,
        paddingRight: 40,
        fontWeight: 'bold'
    },
    text1: {
        borderRadius: 10,
        padding: 18,
        backgroundColor: '#2196F3',
        color: 'white',
        alignSelf: 'center',
        marginTop: 10,
        width: '80%',
        alignItems: 'center',
        paddingLeft: '33%',
        fontWeight: 'bold'
    },
    header: {
        padding: 15,
        backgroundColor: '#2196F3',
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: '7%',
        marginBottom: '30%'
    },
    titleText: {
        fontSize: 17,
        fontWeight: 'normal',
        textAlign: 'center',
        color: '#2196F3',
        margin: 18
    },
    tinyLogo: {
        width: 60,
        height: 60,
        backgroundColor: '#2196F3',
        borderRadius: 10,
    },
})

const mapStateToProps = (state: any) => {
    return {
        todo_list: state.todos.todo_list,
        count: state.todos.count
    }
}

const mapDispatchToProps = { addTodo, deleteTodo, changeCount }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonScreen)