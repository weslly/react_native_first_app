import * as React from 'react';
import {ActivityIndicator, ImageBackground, StyleSheet, View} from 'react-native';
import CatList from '../components/CatList';
import axios from 'axios';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    // this.state.data = ['a']
    var config = {
      method: 'get',
      url: 'https://api.thecatapi.com/v1/breeds?limit=20',
      headers: {
        'x-api-key': ' be44ba84-50ed-4a64-8318-d9d235ab9701',
      },
    };

    axios(config)
      .then((response) => {
        this.setState({data: response.data, isLoading: false});
        console.log(this.state.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const {isLoading} = this.state;
    return (
      <ImageBackground
        style={styles.imageBackground}
        blurRadius={5}
        source={{
          uri: 'https://images.unsplash.com/photo-1549545931-59bf067af9ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80',
        }}>
        <View style={styles.mainView}>
          {isLoading && <ActivityIndicator size="large" color="white" />}
          <CatList style={styles.flatList} data={this.state.data} navigation={this.props.navigation} />
          {/* <MyButton style={styles.button} title="Login" screen="Login" navigation={this.props.navigation} /> */}
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  flatList: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'red',
    borderRadius: 1,
  },
  button: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'blue',
    borderRadius: 1,
  },
  mainView: {
    // flex: 1,
    padding: 22,
    // justifyContent: 'flex-end',
    paddingBottom: 14,
    height: '100%',
    // paddingBottom: 80,
  },
  imageBackground: {
    flex: 1,
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },
});
