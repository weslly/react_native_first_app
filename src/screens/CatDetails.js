import * as React from 'react';
import {ImageBackground, Image, StyleSheet, Text, View} from 'react-native';
import StarRating from 'react-native-star-rating';
import MyButton from '../components/MyButton';

export default class CatDetails extends React.Component {
  render() {
    const {item} = this.props.route.params;
    return (
      <View>
        <ImageBackground
          style={styles.imageBackground}
          blurRadius={5}
          source={{
            uri: 'https://images.unsplash.com/photo-1549545931-59bf067af9ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80',
          }}>
          <View style={styles.listItem}>
            <Image style={styles.listItemImage} source={{uri: item.image.url}} />
            <View style={styles.listItemDescription}>
              <Text style={styles.listItemContentTitle}>{item.name}</Text>
              <View style={styles.listItemCountryContainer}>
                <Image
                  style={styles.listCountry}
                  source={{uri: `https://countryflagsapi.com/png/${item.country_code}`}}
                />
                <Text style={styles.listCountryTitle}>{item.origin}</Text>
              </View>
              <View style={styles.listStar}>
                <Text style={styles.listDescStar}>Intelligence: </Text>
                <StarRating
                  rating={item.intelligence}
                  starSize={20}
                  fullStarColor="orange"
                  numberOfStars={5}
                  name="rating"
                />
              </View>
              <View style={styles.listStar}>
                <Text style={styles.listDescStar}>Energy: </Text>
                <StarRating
                  rating={item.energy_level}
                  starSize={20}
                  fullStarColor="orange"
                  numberOfStars={5}
                  name="rating"
                />
              </View>
              <View style={styles.listStar}>
                <Text style={styles.listDescStar}>Health: </Text>
                <StarRating
                  rating={item.health_issues}
                  starSize={20}
                  fullStarColor="orange"
                  numberOfStars={5}
                  name="rating"
                />
              </View>
              <View style={styles.listStar}>
                <Text style={styles.listDescStar}>Affection: </Text>
                <StarRating
                  rating={item.affection_level}
                  starSize={20}
                  fullStarColor="orange"
                  numberOfStars={5}
                  name="rating"
                />
              </View>
              <Text style={styles.listItemTemperament}>{item.temperament}</Text>
              <Text style={styles.listItemDescriptionText}>{item.description}</Text>
            </View>
          </View>
          <MyButton style={styles.backButton} title="Voltar" screen="Home" navigation={this.props.navigation} />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'white',
    marginBotton: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    borderRadius: 1,
    margin: 20,
  },
  listItemContainer: {
    padding: 20,
    backgroundColor: 'white',
    margin: 20,
  },
  listItemCountryContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemDescription: {
    padding: 20,
  },
  listItemDescriptionText: {
    borderTopWidth: 1,
    borderTopColor: '#aeaeae',
    paddingTop: 20,
    marginTop: 20,
  },
  listCountry: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
  listCountryTitle: {
    paddingTop: 2,
    paddingBottom: 8,
  },
  listItemImage: {
    width: '100%',
    height: 300,
  },
  listItemTemperament: {
    marginTop: 20,
    fontStyle: 'italic',
  },
  listItemContentTitle: {
    fontSize: 26,
    marginBottom: 10,
    marginTop: 10,
    color: 'black',
    fontWeight: '600',
  },
  listItemContentSubtitle: {
    fontSize: 12,
    color: 'gray',
    fontWeight: '400',
    alignSelf: 'flex-start',
    margin: 8,
  },
  imageBackground: {
    height: '100%',
  },
  listStar: {
    flexDirection: 'row',
  },
  listDescStar: {
    width: 100,
    textAlign: 'right',
  },
  backButton: {
    margin: 20,
  },
});
