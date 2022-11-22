import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';

import doce from '../banco';


export default function ExibirLista(props){
  function ExibirItem({item}){
    return(
      <View style={styles.container}> 
        <TouchableOpacity onPress={()=>props.navigation.navigate("Detalhes",{cod:item.id})}> 
            <Text style={styles.titulo}>{item.nome} </Text>
            <Text style={styles.descricao}>{item.descricao}</Text>
            <Text style={styles.preco}>R$ {item.preco} </Text>
            <Image
            style={styles.img}
            source={{uri:item.logo}}
            />
        </TouchableOpacity>
      </View>
    )
  }


  return(
    <View>
      <FlatList data= {doce} renderItem={ExibirItem}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
  borderBottomWidth:1, 
  padding: 5, 
  borderBottomColor: "#a09fa0", 
  height: 180, 
  alignItems: 'center', 
  justifyContent: 'center', 
  paddingRight: 20,
  backgroundColor: '#cfdbd5'

  },
  img:{
    width: 140,
    height: 140,
    position: 'absolute',
    left: 190,
    top: -7,
    borderRadius: 4,
    

  },
  titulo:{
      color: "#772F1A",
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 7,

  },
  preco:{
    color: "#",
    fontSize: 18,
    fontWeight: 'bold',

  },
  descricao:{
    textAlign: "justify",
    marginRight: 129,
    marginBottom: 7,
    fontSize: 13
  }


})
