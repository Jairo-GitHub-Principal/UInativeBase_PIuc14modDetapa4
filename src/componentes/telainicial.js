import * as React from "react";
import { Image, ScrollView, _Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; //stack navigation
import { Box, Text, Pressable, Button, Center, Flex, Spacer, HStack, Badge, } from "native-base";

import CadastarListarCliente from "./cadastroEListagem";
import ListagemCliente from "./listagemCliente";

import { homeStyle } from "../estilos/estilos";
import { LogBox } from "react-native/Libraries/LogBox/LogBox";




function TelaInicial({ navigation }) {
    const logo = require('../img/LogoSantosImobiliaria.png')


    return (
        
        <ScrollView style={{ backgroundColor: '#738c7b' }} >

            <Box style={{ marginBottom: 100, flexDirection: 'row', backgroundColor: '#869D92', width: '100%', alignItems: 'center', paddingTop: 10, justifyContent: 'space-between', }}>
                <Text style={{ color: 'white', marginLeft: 30, fontSize: 20 }}>SantosImobiliária</Text>
                <Image source={logo} style={{ marginRight: 30, width: 100, height: 55 }}></Image>
            </Box>

            <Flex  alignItems="center">

              
                    <Box flexDirection={"column"} alignContent="center" alignItems="center" >
                        
                        <Pressable onPress={() => navigation.navigate("cadastro") }maxW="96">
                            
                            {({ isHovered, isFocused, isPressed }) => {
                                return <Box bg={isPressed ? "coolGray.200" : isHovered ? "primary" : "coolGray.100"} 
                                style={{ transform: [{ scale: isPressed ? 0.9 : 1 }] }}
                                rounded="30"  borderWidth="1" borderColor="coolGray.300" width={250} maxW="96" shadow="3" p="5" mb="35">

                                    <Text color="black" fontSize="17" fontWeight="black" textAlign={"center"}>
                                        Cadastrar clientes
                                    </Text>

                                    
                                </Box>;
                            }}
                            </Pressable>

                           

                        
                        

                        <Pressable  onPress={() => navigation.navigate("listagem")}>
                            {({ isHovered, isFocused, isPressed }) => {
                                return <Box bg={isPressed ? "blue" :"coolGray.200"}
                                style={{transform: [{ scale: isPressed ? 0.9 : 1 } ]
                                }}
                                    rounded="30" overflow="hidden" borderWidth="1" borderColor="coolGray.300" width={250} maxW="96" shadow="3"  p="5" >

                                    <Text color="black" fontSize="17" fontWeight="black" textAlign={"center"}>
                                        Clientes cadastrados
                                    </Text>
                                </Box>;
                            }}
                            </Pressable>

       
                        

                            <Box alignItems="center">
       
      </Box>;
                       
                    </Box>

                   
                

            </Flex>


        </ScrollView>
    );

    LogBox.ignoreAllLogs();

}

const stack = createNativeStackNavigator();
export default function Home() {
    return (

        <stack.Navigator  >
           
            
            <stack.Screen name="Home" component={TelaInicial} />
            <stack.Screen name="cadastro" component={CadastarListarCliente} />
            <stack.Screen name="listagem" component={ListagemCliente} />
          

        </stack.Navigator>

    )

}


// estilos de cores native base para botoes

