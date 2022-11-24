import { Pressable, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope, faKey, faEye } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@react-native-material/core";
import { Text, View } from "../components/Themed";
import firebase from '../database/firebase';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordInvisible, setPasswordInvisible] = useState(true);

  const userLogin = () => {
    if (password === '' || email === '') {
      alert('Vnesite manjkajoče podatke!')
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res: any) => {
          alert('Prijava je bila uspešna!');
          setEmail('');
          setPassword('');
        })
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prijava</Text>
      <Text style={styles.mainText}>
        Uporaba računa Vam omogoča shranjevanje preteklih iger.
      </Text>

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
        <Button title="Prijava" color="white" onPress={() => userLogin()} />
      </View>

      <Text style={styles.secondaryText}>
        Še niste registrirani?
      </Text>
      <Text style={styles.registrationText} onPress={() => navigation.navigate('Registration')}>Registracija</Text>
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
    marginBottom: 20,
  },
  secondaryText: {
    fontSize: 20,
    paddingHorizontal: 60,
    textAlign: "center",
    color: "white",
    marginTop: 150
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
  submitButtonRow: {
    marginTop: 10,
    marginBottom: 40
  },
});
