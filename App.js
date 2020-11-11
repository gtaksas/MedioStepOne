import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    TouchableOpacity.defaultProps = { activeOpacity: 0.6 };
    const AppButton = ({ onPress, title }) => (
        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('./medio_logo.png')}
            />
            <Text style={styles.textLine}>Üdv, {name}!</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Név'
                    onChangeText={(value) => setText(value)}
                />
                <AppButton
                    title="Küldés"
                    onPress={() => setName(text)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: 92,
        maxWidth: 275,
        marginHorizontal: 30,
    },
    textLine: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'gray',
        maxWidth: '90%',
        padding: 15,
        textAlign: 'center'
    },
    inputContainer: {
        marginVertical: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    input: {
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        width: 160,
        padding: 10,
        marginRight: 10,
        marginLeft: 1,
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#4aa9e8",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});
