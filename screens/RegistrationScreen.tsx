import { StatusBar } from "expo-status-bar";
import {
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Button } from "@react-native-material/core";
import {
  faEnvelope,
  faKey,
  faUser,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

export default function RegistrationScreen() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordInvisible, setPasswordInvisible] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <FontAwesomeIcon icon={faUser} color={"white"} />
        <TextInput
          style={styles.inputBox}
          placeholder="Uporabniško ime"
          placeholderTextColor="gray"
          value={username}
          onChangeText={(text) => setUsername(text)}
          autoCapitalize="none"
          textContentType="username"
          spellCheck={false}
        />
      </View>
      <View style={styles.inputRow}>
        <FontAwesomeIcon icon={faEnvelope} color={"white"} />
        <TextInput
          style={styles.inputBox}
          placeholder="Elektronski naslov"
          placeholderTextColor="gray"
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          spellCheck={false}
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
          textContentType="password"
          spellCheck={false}
        />
        <Pressable
          onPress={() =>
            setPasswordInvisible((passwordInvisible) => !passwordInvisible)
          }
        >
          <FontAwesomeIcon icon={faEye} color={"white"} />
        </Pressable>
      </View>
      <View style={styles.submitButtonRow}>
        <Button title="Registracija" color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  submitButtonRow: {
    marginTop: 10,
    marginBottom: 40
  },
});
