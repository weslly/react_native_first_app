import * as React from 'react';
import {Dimensions, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import MyButton from '../components/MyButton';

const screenSizeHeight = Dimensions.get('window').height;
const screenSizeWidth = Dimensions.get('window').width;
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      background: require('../assets/images/loginBackground.jpg'),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event});
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Image source={require('../assets/images/fatCat.png')} style={styles.logo} />
        <View style={styles.titleView}>
          <Text style={styles.titleText}>LOGIN</Text>
        </View>
        <View style={styles.textInputView}>
          <TextInput
            style={styles.textInput}
            value={this.state.email}
            keyboardType="email-address"
            placeholder={'Email'}
          />
          <TextInput style={styles.textInput} value={this.state.password} placeholder={'Senha'} />
          <MyButton title="Entrar" screen="Home" navigation={this.props.navigation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    height: '100%',
    padding: 32,
    backgroundColor: 'white',
  },
  logo: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
  imageBackground: {
    height: screenSizeHeight,
    padding: 32,
  },
  titleView: {
    textAlign: 'left',
  },
  titleText: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
    borderBottomColor: '#aeaeae',
    borderBottomWidth: 1,
    marginBottom: 15,
    color: 'black',
  },
  textInputView: {
    flex: 2,
  },
  textInput: {
    paddingLeft: 20,
    borderRadius: 10,
    marginVertical: 8,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  button: {
    backgroundColor: '#7711AA',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});
