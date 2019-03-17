import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TextInput } from 'react-native';
import { Input, Button } from 'react-native-elements';

export default class UselessTextInput extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      text: '',
      textoutput: 'Klick auf den Button um was zu sehen!'
    }
  }


  buttonClick = () => {
    this.state.textoutput = this.setState({textoutput:this.state.text});
  }

  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder={'Mensch gib doch einen Text ein'}
          textAlign={'center'}
          onChangeText = { (text) => this.setState({text})}
        />

        <Button
          buttonStyle={styles.button}
          title="Klick doch auf mich"
          color="#841584"
          onPress={this.buttonClick}
          disabled={!this.state.text}
        />

        <Text style={styles.output}>{this.state.textoutput}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    marginTop:60
  },
  button: {
    backgroundColor: 'red',
    marginTop: 10,
    borderRadius: 0
  },
  output: {
    position: 'absolute',
    bottom: 40,
    right: 40
  }
});
