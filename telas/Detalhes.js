import React,{useState} from "react"
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native"
import doce from "../banco"

const relogio = "https://cdn-icons-png.flaticon.com/512/151/151770.png"
const pessoa = "https://cdn-icons-png.flaticon.com/512/711/711168.png"
const estrela = "https://cdn-icons-png.flaticon.com/512/148/148841.png"
export default function Detalhes ({route,navigation}){
  const [cont, setCont] = useState(0);
  const cod = route.params.cod
  const pudim = doce[cod]

  return(
    <View style={styles.container}>

      <Image 
      source={{uri: pudim.logo}}
      style={styles.imagem}
      />
      <Text style={styles.title}>{pudim.nome}</Text>
      <Text style={styles.preco}>R$ {pudim.preco}</Text>
      <View style={styles.estrelaView}>
          <Image source={{uri: estrela}} style={styles.imgEstrela}/>
          <Image source={{uri: estrela}} style={styles.imgEstrela}/>
          <Image source={{uri: estrela}} style={styles.imgEstrela}/>
          <Image source={{uri: estrela}} style={styles.imgEstrela}/>
          <Image source={{uri: estrela}} style={styles.imgEstrela}/>
          <Text style={{marginLeft: 8, marginTop: 0}}> {cont} reviews</Text>
      </View>
      <View style={{alignItems: "center", flexDirection: "row", justifyContent: "center", paddingTop: 50}}>
        <View style={{flexDirection: "row", alignItems: "center", margin: 20}}>
          <Image 
          style={styles.icon}
          source={{uri: relogio}}/> 
          <Text>25min</Text>     
        </View>
        <View style={{flexDirection: "row", alignItems: "center", margin: 20}}>
          <Image 
          style={styles.icon}
          source={{uri: pessoa}}/> 
          <Text>1 pessoa</Text>     
        </View>
      </View>
      <View style={{alignItems: "center"}}>
        <TouchableOpacity 
        onPress={()=>navigation.navigate("Pagamento")}
        style={styles.buttonlOGIN}>
          <Text style={{color: "white", fontWeight: "bold", textAlign: 'center'}}>Fazer Pedido</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    backgroundColor: '#cfdbd5',
  
  },
  imagem:{
    width: "95%",
    height: 200,
    margin: 10,
    borderRadius: 10,
    borderWidth: 2
  },
  title:{
    color: "#772F1A",
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 7,
    margin: 10

  },
  preco:{
    color: "#",
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
    marginTop: 40

  },
  icon:{
    width: 35,
    height: 35,
    marginRight: 5
  },
  buttonlOGIN:{
    backgroundColor: "#6b705c",
    width: "95%",
    height: 46,
    borderRadius: 3,
    marginTop: 0,
    alignItems: "center",
    justifyContent: 'center'
  },
  imgEstrela:{
    width: 20,
    height: 20,
    margin: 1,
    marginTop: 0
  },
  estrelaView:{
    flexDirection: "row",
    margin: 5

  },
})


