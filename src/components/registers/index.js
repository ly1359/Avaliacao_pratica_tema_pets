import React, {useState} from "react";
import {View, Text, TextInput, Button, Image, StyleSheet} from 'react-native';

export default function Register(){
    const [inputText, setInputText] = useState('');
    const [displayText, setDisplayText] = useState('')

    return (
        <View style={styles.container}>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Cadastre o seu Pet:</Text>
            </View>

            <View style={styles.inputContainer}>

                <View  style={styles.inputTitle}>
                    <Text>
                        Nome do Pet:
                    </Text>
                    <TextInput 
                    style={styles.input}
                    onChangeText={t=>setInputText(t)}
                    value={inputText}
                    />
                </View>
                <Image source={require('../../../assets/pets.jpeg')} style={styles.image}/>
            </View>

            <View style={styles.buttonContainer}>
                <Button title="LIMPAR"  onPress={() => {setInputText('')}}/>
                <Button title="CADASTRAR" onPress={() => setDisplayText(inputText)}/>
            </View>

           <View style={styles.display}>
                {displayText !== '' && <Text>{displayText}</Text> }
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {margin:10, alignContent: 'space-around'},
    titleContainer: {display:'flex', alignItems:'center', fontWeight: 'bold', marginBottom:20},
    title: {fontSize:16, margin: 5},
    inputContainer: {display:'flex', flexDirection:'row', justifyContent:'center', margin: 10},
    inputTitle: {displa:'flex', alignItems: 'center'},
    input: {borderColor:'gray', borderWidth: 1, width:180},
    image: {width:120, height:120},
    buttonContainer: {flexDirection: 'row', justifyContent: 'space-around', margin: 20},
    display: {display:'flex', alignItems:'center'}

});