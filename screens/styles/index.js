import styled from 'styled-components/native'
import { Dimensions } from 'react-native'



export const Cont = styled.SafeAreaView`
    height: fit-content;
   background-color:red;
    padding: 3px;
    align-items: center;
    color:white;
  
    margin-top:22px;
    ` 


export const TextStyle = styled.Text`
  
    color:white;
    font-size:22px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-top:22px;
    margin-bottom:22px;
    background-color: ${props => props.backgroundColor || 'green'};

  
   
    ` 