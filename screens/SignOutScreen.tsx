import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useState } from "react";
import { Button } from "@react-native-material/core";
import firebase from '../database/firebase';

export default function SignOutScreen({ navigation }: any) {
    const [username, setUsername] = useState(firebase.auth().currentUser?.displayName);
    const [buttonTitle, setButtonTitle] = useState("Odjava");

    if(username == null)
    {
        setUsername("Uporabnik ni prijavljen.");
        setButtonTitle("Prijava");
    }

    const signOut = () => {
        firebase.auth().signOut();
        alert("Odjava je bila uspešna!")
    }

    const buttonOnPressHandler = () => {
        if(username != "Uporabnik ni prijavljen.")
        {
            signOut();
        } else 
        {
            navigation.navigate('Login');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{username}</Text>
            <View style={styles.signOutButtonRow}>
                <Button title={buttonTitle} color="white" onPress={() => buttonOnPressHandler()} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    signOutButtonRow: {
        marginTop: 10,
        marginBottom: 40
    },
});
