import { View, Text, ActivityIndicator } from 'react-native'
import React, { useContext } from 'react'
import AppRoutes from './app.route';
import AuthRoutes from './auth.routes';
import { AuthContext } from '../contexts/AuthContext';



export default function Routes() {

  const {isAuthenticated, loading} = useContext(AuthContext)
  

  if (loading) {
    return(
      <View style={{
          flex:1, 
          backgroundColor: "#f5f7fb", 
          justifyContent: 'center', 
          alignItems: 'center'
          }}>
            <ActivityIndicator size={60}  color="#1d1d2e"/>
      </View>
    )
  }



  return (
    isAuthenticated ? <AppRoutes/> : <AuthRoutes/>
  )
}