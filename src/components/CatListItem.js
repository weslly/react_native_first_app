import * as React from 'react';
import {Image, StyleSheet, TouchableHighlight, Text, View} from 'react-native';

export default class CatListItem extends React.Component {
  goToDetail(item) {
    this.props.navigation.navigate('CatDetails', {screen: 'CatDetails', item});
  }

  render() {
    const {item} = this.props;
    return (
      <View style={styles.listItem}>
        <TouchableHighlight underlayColor="#DDDDDD" activeOpacity={0.6} onPress={() => this.goToDetail(item)}>
          <View style={styles.listItemContainer}>
            <Text style={styles.listItemContentTitle}>{item.name}</Text>
            <View style={styles.listItemDescription}>
              <View style={styles.listItemCountryContainer}>
                <Image
                  style={styles.listCountry}
                  source={{uri: `https://countryflagsapi.com/png/${item.country_code}`}}
                />
                <Text style={styles.listCountryTitle}>{item.origin}</Text>
              </View>
            </View>
            <Image style={styles.listItemImage} source={{uri: item.image.url}} />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    height: 120,
    backgroundColor: 'white',
    margin: 4,
    marginBotton: 20,
    flexBasis: '50%',
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    borderRadius: 1,
  },
  listItemContainer: {
    padding: 20,
  },
  listItemCountryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemDescription: {
    width: '70%',
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
    width: 120,
    height: 120,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  listItemContentTitle: {
    fontSize: 18,
    marginBottom: 10,
    color: 'gray',
    fontWeight: '600',
  },
  listItemContentSubtitle: {
    fontSize: 12,
    color: 'gray',
    fontWeight: '400',
    alignSelf: 'flex-start',
    margin: 8,
  },
});
