import { Pressable, Text, StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";


export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container}>
      {" "}
      <Text style={styles.label}>Hi there</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="full Name"
          style={styles.input}
          placeholderTextColor={"#717171"}
          onChangeText={(text) => {console.log(text)}}
        />
      </View>
      <Pressable
        style={styles.button}
        onPress={() => {
          console.log("Button pressed");
        }}
      >
        on
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
      <StatusBar backgroundColor="#010709" style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#010709",
    flex: 1,
    paddingHorizontal: 20,
  },
  inputContainer:{
    gap: 5
  },
  label:{
    color:"#BDBDBD"
  },
  input:{
    borderRadius:5,
    borderColor:"BDBDBD",
    padding: 5,
    paddingHorizontal: 10,
    color: "#BDBDBD",
    borderWidth:0.8
  },
  button: {
    backgroundColor: "#306A68",
    padding: 15,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "BDBDBD",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
