import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <Text style={{fontWeight: 'bold', fontSize: 24, color: '#F63A6E'}}>Chats</Text>
    
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
      width: '100%',
      flex: 1,
      padding: 5,
    },
    card: {
        width: 330,
        height: 500,
        borderRadius: 20,
        backgroundColor: 'white',

      },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 10,
    },
    users: {
      flexDirection: 'column',
      flexWrap: 'wrap',
      flex: 1,
    },
    user: {
      width: 45,
      height: 45,
      margin: 10,
      borderRadius: 50,
  
      borderWidth: 2,
      padding: 3,
      borderColor: '#F63A6E',
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 50,
    },
  });

export default ChatScreen