import { useLocalSearchParams } from "expo-router";
import { Button, ScrollView, StyleSheet, Text, Image, TextInput } from "react-native";
import { useEffect, useState } from "react";

type Fato = {
    value: string,
}

export default function Cliente() {
    const [fato, setFato] = useState<Fato>();

    const { id } = useLocalSearchParams()


    function callApi() {
      fetch('https://api.chucknorris.io/jokes/random')
        .then(async (resposta) => {
          const data = await resposta.json()
          setFato(data)
      })
    }


    return (
        <ScrollView>
          <Text style={styles.label}>
            Fato aleatório sobre Chuck Norris: 
          </Text>
          
          <Button
              title="Descobrir Fato"
              onPress={() => callApi()}
          />

          <Text style={styles.label2}>
            {fato?.value}
          </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    label:{
      fontSize:30,
      textAlign: "center",
      marginVertical: 50
    },
    button:{
      margin:40
    },
    label2:{
      textAlign: "center",
      fontSize:30,
      marginVertical: 40,
      marginHorizontal: 20
    },
  });
  
