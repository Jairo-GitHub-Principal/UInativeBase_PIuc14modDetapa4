import React, { Component } from "react";
import { TouchableOpacity, ScrollView, StyleSheet,Image } from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LogBox } from "react-native/Libraries/LogBox/LogBox";
import { Box,Text,Pressable } from "native-base";


import { homeStyle } from "../estilos/estilos";


import ItemDatabase from "../databases/ItemDatabase";







export default class ListagemCliente extends Component {
    

    constructor(props) {

        super(props)
        this.state = {
            listaDecliente: [],
            
        }
        
        this.ListarCliente()
        
      
    }



    ListarCliente = () => {
        const DB = new ItemDatabase()
        DB.Listar().then(listaCompleta => { this.setState({ listaDecliente: listaCompleta }) })

    }

    remover = (id) => {

        const DB = new ItemDatabase();
        DB.Remover(id);
        this.ListarCliente()
    }

    update=()=>{

    }


    render() {
        
        

       
        return (




            <ScrollView style={{ backgroundColor: '#738c7b' }} >
               
                { this.state.listaDecliente.map(elementoLista =>( 
                    
                   
                    
                    <Box style={estilos.containerLista}>
                          
                    
                           
                        <Box style={{ alignItems: 'flex-start', margin: 20 }}>
                            
                        <Box>
                           
                               
                               <Image style={{width:wp(80),height:hp(40)}} source={{uri:elementoLista.imgDoAnuncio}}/>
                               

                               

                               
                           </Box>
                           <Text fontSize ="17"  fontWeight= '800' color = 'white'>id:{key=elementoLista.id} </Text>
                            <Text fontSize ="17"  fontWeight= '800' color = 'white' >Cliente: {this.props.nome=elementoLista.nome} </Text>
                            <Text fontSize ="17"  fontWeight= '800' color = 'white' >CPF: {this.props.cpf = elementoLista.cpf}</Text>
                            <Text fontSize ="17"  fontWeight= '800' color = 'white'>Data de nascimento: {this.props.dataNascimento = elementoLista.dataNascimento}</Text>
                            <Text fontSize ="17"  fontWeight= '800' color = 'white'>Assino Contrato: {this.props.dataAssiContrato = elementoLista.dataAssiContrato}</Text>
                            <Text fontSize ="17"  fontWeight= '800' color = 'white'>Vencimento do aluguel: {this.props.dataPagaLuguel = elementoLista.dataPagaLuguel}</Text>
                            



                        </Box>


                        <Box style={homeStyle.containButtLista}>
                                                   

                            <Pressable   onPressIn={() => this.remover( this.props.id = elementoLista.id)} >
                                
                            {({ isPressed }) => {
                                return <Box bg={isPressed ? "blue" :"#2f4f4f"}
                                style={{transform: [{ scale: isPressed ? 0.9 : 0.7 } ]
                                }}
                                    rounded="10" overflow="hidden" borderWidth="2" borderColor="coolGray.300" width={200} maxW="96" shadow="5"  p="3" >

                                    <Text color="white" fontSize="25" fontWeight="900" textAlign={"center"}>
                                    Excluir
                                    </Text>
                                </Box>;
                            }}
                            </Pressable>
                        </Box>
                                



                    </Box>


                                      

                    )

                )
                

                
            

                   
                }

            </ScrollView>


        ) 
        
    }
}








const estilos = StyleSheet.create({
    containerLista: { margin: 5, borderWidth: 5, borderColor: '#2f4f4f', padding: 5 },
    testos: { fontSize: 17, fontWeight: '700', color: 'white' },


})