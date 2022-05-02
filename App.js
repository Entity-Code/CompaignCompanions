import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      
      <div>
        
        <Text style={styles.container.subContainer}>Ciao</Text>
        
      </div>
      
      {/*POSSO AGGIUNGERE HTML QUI, ma lo style preso dall'oggetto giu non ci va molto d'accordo*/}
      
      <StatusBar style="auto" />
    </View>
    
  );
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CB3234',
    alignItems: 'center',
    justifyContent: 'center',
    subContainer: {
      fontFamily: "Cochin",
      fontSize: 50,
      fontWeight: "bold",
      color: "#fff"
    }
  }

});
