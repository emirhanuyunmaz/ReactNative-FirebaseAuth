import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

export default function LoginScreen() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigation = useNavigation()
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user){
                navigation.navigate("Home")
            }
        })
    },[])

    const handleSignup = () => {
        auth.createUserWithEmailAndPassword(email,password).then((userCredentials) => {
            const user = userCredentials.user
            console.log("Kullanıcı:",user);
            navigation.navigate("Home")
        }).catch((err) => {
            alert(err.message)
            
        })
    }

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email,password).then((userCredentials) => {
            const user = userCredentials.user
            console.log("Kullanıcı Giriş yaptı:",user);
        }).catch((err) => {
            alert(err.message)
            
        })
    }

    return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.inputContainer}>
            
            <TextInput value={email} onChangeText={(text) => setEmail(text) } style={styles.input} placeholder='Email' />
            <TextInput value={password} onChangeText={(text) => setPassword(text)} secureTextEntry style={styles.input} placeholder='Password' />
            
            <View style={styles.buttonContainer}>

                <TouchableOpacity onPress={handleLogin} style={styles.button} > 
                    <Text style={styles.buttonText} >Giriş Yap</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={handleSignup} style={[styles.button,,styles.outlineButton]} >
                    <Text style={styles.outlineButtonText} >Kayıt ol</Text>
                </TouchableOpacity>

            </View>
        </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },

    inputContainer:{
        width:"80%",
    },

    input:{
        backgroundColor:"white",
        paddingHorizontal:15,
        paddingVertical:10,
        marginTop:5,
        borderRadius:10
    },

    buttonContainer:{
       justifyContent:"center",
       alignItems:"center",
        marginTop:40,
    },

    button:{
        width:'60%',
        backgroundColor:'#0782f9',
        padding:15,
        alignItems:"center",
        borderRadius:10
    },

    buttonText:{
        color:"white",
        fontSize:16,
        fontWeight:"700"
    },

    outlineButton:{
        backgroundColor:"white",
        marginTop:5,

    },

    outlineButtonText:{
        color:'#0782f9',
        fontSize:16,
        fontWeight:"700"
    }

})