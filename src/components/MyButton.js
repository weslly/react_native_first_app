import * as React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class MyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animationType: 'pulse',
    };
  }

  animatedPress = () => {
    this.setState({animationType: 'shake'});

    const {screen, navigation} = this.props;
    navigation.navigate(screen, {screen: screen});
  };

  render() {
    const {title} = this.props;
    return (
      <Animatable.View animation={this.state.animationType}>
        <Pressable style={styles.mainTheme} onPress={() => this.animatedPress()}>
          <Text style={styles.textButton}>{`${title}`}</Text>
        </Pressable>
      </Animatable.View>
    );
  }
}

const styles = StyleSheet.create({
  mainTheme: {
    height: 50,
    backgroundColor: '#FDA135',
    marginVertical: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
