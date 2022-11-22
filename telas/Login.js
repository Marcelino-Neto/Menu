
import { Text, View, StyleSheet, Button, TouchableOpacity, TextInput, Image } from 'react-native';


const Logo = "https://www.emojiall.com/images/60/blobmoji/emoji_u1f36e.png"

export default function Login(props){
  function irParaApp(){
    props.navigation.navigate("Cardapio");
  }

  function irParaCadastrar(){
    props.navigation.navigate("Criar conta");
  }

  return(
    <View style={styles.container}>
    <Text style={styles.nome}> DOCEARIA - PUDIM DE VÓ </Text>
      <Image 
      style={{width: 200, height: 200}}
      source={{uri: Logo}}/>
      <TextInput  style={styles.input} placeholder="Cpf ou Email"/>
      <TextInput  style={styles.input} keyboardType='Numeric' placeholder="Senha"/>
      <TouchableOpacity  onPress = {irParaApp} style={styles.buttonlOGIN} >
          <Text style={{color: "white", fontWeight: "bold", textAlign: 'center'}}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress = {irParaCadastrar}>
          <Text style={{color: "#", textAlign: 'center'}}>Criar conta </Text>
      </TouchableOpacity>
    </View>
)
}

const styles = StyleSheet.create({
  nome:{
      color: "#772F1A",
      fontSize: 18,
      fontWeight: 'bold',
      borderRadius: '#772F1A'
  },

  container:{
    flex: 1,
    padding: 10,
    alignItems: 'center',
    paddingTop: 100,
    backgroundColor: '#cfdbd5',
  },
  buttonlOGIN:{
    backgroundColor: "#6b705c",
    width:150,
    height: 50,
    margin: 12,
    justifyContent: "center",
    borderRadius:20,
    marginTop: 10,
    
  },
  input:{
    borderColor: "#6b705c",
    borderWidth: 1,
    margin: 5,
    padding: 10,
    width: "90%",
    borderRadius: 5
  },
  
  image:{
    width: "95%",
    height: 200,
    margin: 10,
    borderRadius: 10,
    borderWidth: 2
  },

  
  titulo:{
    fontSize: 20,
    fontWeight: "bold",
    color: "#f37e21"
  },


  viewButton:{
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: -60,
  },

  button:{
    backgroundColor: "#2196f3",
    borderWidth: 2,
    width:130,
    height: 50,
    margin: 12,
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginTop: 50
  },
  inputCad:{
    borderColor: "#CF0E0E",
    borderWidth: 1,
    margin: 5,
    padding: 10,
    width: "90%",
    borderRadius: 5
  },
  viewCad:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }

})