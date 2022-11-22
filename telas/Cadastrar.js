
import { Text, View, StyleSheet, Button, TouchableOpacity, TextInput, Image } from 'react-native';


export default function Cadastrar(props){
  function irParaLogin(){
    props.navigation.navigate("Login");
  }
  return(
    <View style={styles.viewCad}>
      <Text
      style={{
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 30
      }}
      >Iremos realizar seu cadastro. Precisamos de apenas algumas informações</Text>
      <Text>NOME</Text>
      <TextInput
      placeholder="Marcelino Neto "
      style={styles.inputCad}
      />
      <Text>CPF</Text>
      <TextInput
      keyboardType="numeric"
      placeholder="000.000.000-00"
      style={styles.inputCad}
      />
      <Text>EMAIL</Text>
      <TextInput
      keyboardType='Numeric'
      placeholder="@gmail.com"
      style={styles.inputCad}
      />
      <Text>ENDEREÇO</Text>
      <TextInput
      placeholder="Cep: *******-**"
      style={styles.inputCad}
      />
      <Text>SENHA</Text>
      <TextInput
      keyboardType='Numeric'
      placeholder="Ex: 1234"
      style={styles.inputCad}
      />
      
      <TouchableOpacity  onPress = {irParaLogin} style={styles.buttonlOGIN}>
          <Text style={{color: "white", textAlign: 'center'}}>CRIAR CONTA</Text>
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
  
  buttonlOGIN:{
    backgroundColor: "#6b705c",
    width:150,
    height: 50,
    margin: 12,
    justifyContent: "center",
    borderRadius:20,
    marginTop: 10,
    
  },
  inputCad:{
    borderColor: "#CF0E0",
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