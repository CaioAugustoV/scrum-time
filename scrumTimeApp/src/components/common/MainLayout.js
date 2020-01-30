import React from 'react';
import { StatusBar, View, Platform } from 'react-native'

export default function MainLayout(props) {
  return (
    <> 
      <StatusBar 
        translucent
        backgroundColor={props.dark ? "#141414" : "#fff"}
        barStyle={props.dark ? "light-content" : "dark-content"} 
      />
      <View style={{ 
        backgroundColor: props.dark ? "#141414" : "#fff",
        width: '100%',
        height: '100%',
        paddingTop: Platform.OS === 'ios' ? 50 : 0,
      }}>
        {props.children}
      </View>
    </>
  )
}
