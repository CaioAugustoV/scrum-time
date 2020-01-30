import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Dimensions, Platform, SafeAreaView } from 'react-native'
import SvgUri from 'react-native-svg-uri';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  containerTitle: {
    paddingVertical: 20
  },
  title: {
    color: '#fff',
    fontSize: 30
  },
  scrollView: {
    width: '96%'
  },
  card: {
    backgroundColor: '#3e3e3e',
    width: width / 2.6,
    height: width / 4,
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textCard: {
    fontSize: 20,
    color: '#fff',
    marginTop: 10
  }
})

export default function home() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Home</Text>
      </View>
      <ScrollView 
        horizontal 
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        <TouchableOpacity style={styles.card}>
          <SvgUri width="40px" height="40px" source={require('../../static/svg/home-run.svg')} />
          <Text style={styles.textCard}>Projetos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <SvgUri width="40px" height="40px" source={require('../../static/svg/deck.svg')} />
          <Text style={styles.textCard}>Scrum Poker</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <SvgUri width="40px" height="40px" source={require('../../static/svg/wrench.svg')} />
          <Text style={styles.textCard}>Configurações</Text>
        </TouchableOpacity>
      </ScrollView> 
    </View>
  );
}
