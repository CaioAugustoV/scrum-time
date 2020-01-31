import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, ScrollView, Dimensions, Platform, SafeAreaView } from 'react-native'
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
  containerCard: {
    width: '100%',
    flexDirection: 'row',
    height: width / 4,
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
  },
  scrollViewProjects: {
    width: '96%',
  },
  containerProject: {
    width: '100%',
    height: width / 2.2,
    backgroundColor: '#000',
    marginVertical: 10,
    borderRadius: 100,
  },
  containerImageBackground: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  textProject: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 15
  },
  users: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginBottom: 10,
    marginRight: 10
  },
  containerUser: { 
    backgroundColor: '#fff', 
    borderRadius: 100,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerUserAdm: {
    backgroundColor: '#3fa1cc', 
    borderRadius: 100,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  user: {
    color: '#3fa1cc',
    fontWeight: 'bold'
  },
  userAdm: {
    color: '#fff',
    fontWeight: 'bold'
  }
})

export default function home() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Home</Text>
      </View>
      <View style={styles.containerCard}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
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
      <ScrollView 
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollViewProjects}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity style={styles.containerProject}>
          <ImageBackground 
            source={require('../../static/img/example1.png')} 
            style={styles.containerImageBackground}
            imageStyle={{ borderRadius: 10 }}
          >
            <Text style={styles.textProject}>Sistemas de Finanças</Text>
            <View style={styles.users}>
              <View style={styles.containerUser}>
                <Text style={styles.user}>YF</Text>
              </View>
              <View style={styles.containerUserAdm}>
                <Text style={styles.userAdm}>CA</Text>
              </View>
              <View style={styles.containerUser}>
                <Text style={styles.user}>YF</Text>
              </View>
              <View style={styles.containerUser}>
                <Text style={styles.user}>YF</Text>
              </View>
            </View>
          </ImageBackground> 
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
