import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser, faKey, faEye } from "@fortawesome/free-solid-svg-icons";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Text, View } from "../components/Themed";

export default function ModalScreen({navigation}: any) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordInvisible, setpasswordInvisible] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prijava</Text>
      <Text style={styles.mainText}>
        Uporaba računa Vam omogoča shranjevanje preteklih iger.
      </Text>

      <View style={styles.inputRow}>
        <FontAwesomeIcon icon={faUser} color={"white"} />
        <TextInput
          style={styles.inputBox}
          placeholder="Uporabniško ime"
          placeholderTextColor="gray"
          value={username}
          onChangeText={(text) => setUsername(text)}
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputRow}>
        <FontAwesomeIcon icon={faKey} color={"white"} />
        <TextInput
          style={styles.inputBox}
          placeholder="Geslo"
          placeholderTextColor="gray"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={passwordInvisible}
        />
        <FontAwesomeIcon icon={faEye} color={"white"} />
      </View>

      <Text style={styles.secondaryText}>
        Še niste registrirani?
      </Text>
      <Text style={styles.registrationText} onPress={() => navigation.navigate('Registration')}>Registracija</Text>

      {/* skrit StatusBar */}
      <StatusBar hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 120
  },
  mainText: {
    fontSize: 20,
    paddingHorizontal: 60,
    textAlign: "center",
    marginBottom: 30,
  },
  secondaryText: {
    fontSize: 20,
    paddingHorizontal: 60,
    textAlign: "center",
    color: "white",
    marginTop: 220
  },
  registrationText: {
    color: "#ffffff53",
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: 20,
  },
  inputBox: {
    color: "white",
    fontSize: 18,
    padding: 10,
    width: 240,
  },
  inputRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "black",
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    marginVertical: 6,
    width: 300,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
});