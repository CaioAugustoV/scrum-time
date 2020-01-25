import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  containerMenuTop: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  menuTopText: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold'
  },
  menuImageTop: {
    width: 80,
    height: 80
  },
  containerMenuFooter: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 30
  },
  containerIconsMenuFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuImageFooter: {
    width: 40,
    height: 40
  },
  menuAddFooter: {
    borderWidth: 3,
    borderColor: "#fff",
    borderRadius: 1000,
    padding: 5
  },
  containerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  card: {
    width: width / 2.38,
    height: width / 2.38,
    backgroundColor: '#333',
    borderRadius: 20,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: "flex-start"
  },
  numberText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
  },
  textItalic: {
    fontSize: 30,
    fontStyle: 'italic',
    color: '#fff',
    position: 'relative',
    top: -10
  },
  arrow: {
    height: 20,
    width: 50,
    alignSelf: 'flex-end'
  },
  iconsCard: {
    width: width / 5,
    height: width / 5
  },
  textCard: {
    fontSize: 30,
    color: '#fff',
  },
  imagesCard: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textCardTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  textItalicSubTitle: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#fff',
    position: 'relative',
    top: -5
  },
  textBold: {
    fontWeight: 'bold'
  }
})

export default function home() {
  return (
    <View style={styles.container}>
      <View style={styles.containerMenuTop}>
        <Text style={styles.menuTopText}>Home</Text>
        <Image
          style={styles.menuImageTop}
          source={require('../../static/img/logo-b.png')}
        />
      </View>
      <ScrollView>
        <View style={styles.containerCard}>
          <TouchableOpacity style={styles.card}>
            <View>
              <Text style={styles.numberText}>25</Text>
              <Text style={styles.textItalic}>Projetos</Text>
            </View>
            <Image
              style={styles.arrow}
              source={require('../../static/img/arrow.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View>
              <Text style={styles.numberText}>1438</Text>
              <Text style={styles.textItalic}>Pontos</Text>
            </View>
            <Image
              style={styles.arrow}
              source={require('../../static/img/arrow.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.containerCard}>
          <TouchableOpacity style={styles.card}>
            <View style={styles.imagesCard}>
              <Image
                style={styles.iconsCard}
                source={require('../../static/img/graph.png')}
              />
              <Text style={styles.textCard}>Gráficos</Text>
            </View>
            <Image
              style={styles.arrow}
              source={require('../../static/img/arrow.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View style={styles.imagesCard}>
              <Image
                style={styles.iconsCard}
                source={require('../../static/img/files-and-folders.png')}
              />
              <Text style={styles.textCard}>Hístoria</Text>
            </View>
            <Image
              style={styles.arrow}
              source={require('../../static/img/arrow.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.containerCard}>
          <TouchableOpacity style={styles.card}>
            <View>
              <Text style={styles.textCardTitle}>Scrum Poker</Text>
              <Text style={styles.textItalicSubTitle}>Fibonacci</Text>
            </View>
            <Image
              style={styles.arrow}
              source={require('../../static/img/arrow.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View>
              <Text style={styles.textCardTitle}>Scrum Time</Text>
              <Text style={styles.textItalicSubTitle}>
                <Text style={styles.textBold}>01</Text>/12 Sprints
              </Text>
            </View>
            <Image
              style={styles.arrow}
              source={require('../../static/img/arrow.png')}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.containerMenuFooter}>
        <View style={styles.containerIconsMenuFooter}>
          <TouchableOpacity>
            <Image
              style={styles.menuImageFooter}
              source={require('../../static/img/empire-state-building.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 15 }}>
            <Image
              style={styles.menuImageFooter}
              source={require('../../static/img/report.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.menuImageFooter}
              source={require('../../static/img/user.png')}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.menuAddFooter}>
          <Image
            style={styles.menuImageFooter}
            source={require('../../static/img/more.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
