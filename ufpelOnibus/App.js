/**
 * by Mateus Pinheiro
 * 07apr 19
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
      <View style={styles.postContainer}>
      <Text style={styles.postTitle}>Horários Ônibus de Apoio-UFPEL</Text>
      <Text style={styles.postDescription}>Respectivos Horários</Text>

    </View>
    
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>Rota 1: Cotada - Lyceu(Largo Mercado Público)-FaMed-Capão</Text>
      <Text style={styles.postDescription}>*07:00 --- 07:10 --- 07:20</Text>
    
    
    </View>
    
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>Rota 2: Anglo - Cotada - CCHS - Igreja - Casa do Estudante -FaMed - Capão</Text>
      <Text style={styles.postDescription}> *08:50 - 09:40 - 10:30 - 11:20 - 12:10 - 13:00 - 13:50 - 14:40 - 15:30 -
      17:35 - 18:00  18:30 - 19:00
      </Text>

    </View>
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>Rota 3: Campus Capão - FaMed - Canguru - C.do Estudante - Salis Goulart - 
      Agência da Lagoa Mirim - Campus II - FaUrb - Cotada - Anglo:
      </Text>
      <Text style={styles.postDescription}> *08:00 - 08:50 - 09:40 - 10:30 - 11:20 - 12:10 - 13:00 - 13:50 - 14:40 -
      15:40 - 16:10  16:40 - 17:35 - 18:10 - 18:20 - 18:40 - 19:15 - 20:15
      </Text>

    </View>
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>Rota 4:Campus Capão do Leão - Centro Agropecuário da Palma</Text>
      <Text style={styles.postDescription}> *08:15 --- 14:00</Text>

    </View>
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>Centro Agropecuário da Palma - Campus Capão do Leão</Text>
      <Text style={styles.postDescription}> *11:30 --- 17:20</Text>

    </View> 
</ScrollView>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#8fbc8f"
  },
  postContainer:{
    margin: 20,
    padding: 20,
    backgroundColor: "#FFF",
    borderRadius: 3
  },

  postTitle:{
    fontSize:18,
    fontWeight: "bold",
    marginBottom:5,

  },
  postDescription:{
    textAlign: "center",

  }
 
});
