import React from 'react';
import { StyleSheet, Text, View , TextInput, Button} from 'react-native';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      textOut: '',
      show: false
    }
  }

  giveOut = (ev) => {
    this.state.show = !this.state.show;
    console.log(this.state.show);
  }



  render() {
    return (
      <View style={styles.container}> // main View -> der muss vorhanden sein. nimmt vom style.container object die flex styles an
        <View> // Ein weiteres View für das Imput feld und einem Leeren View der nur zum aligment dient
          <View style={{height: 50}}> //View damit ich einen abstand oben habe
          </View>
          <TextInput  // der TextImput mit Style attributen und einem Placeholder der  nur zur "Beschreiung in der App" dient
              style={{height: 50, width: 350, backgroundColor: 'grey', borderColor: 'black', fontSize: 40}}
              placeholder="Type here to shit 💩"
              onChangeText={(text) => this.setState({textOut: text})}  // wenn sich der Text im TextInput ändert dann soll es den State im Constructor auf den text ändern, damit er direkt angezeigt wird wenn er sich ändet
              />
        </View>
        <View style={styles.output}>  //View in dem der Output und der Button ist. nur für Flexbox gemacht. damit ich in dem View die Elemente anders anordnen kann
            <Button
              title="Outline button"
              type="outline"
              onPress={this.giveOut} //wenn er gedrückt wird dann wird eine Function aurgeruft, welche dafür sorgt, dass der Text angezeugt wird
            />

            <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>  //View damit ich den Output nach reechts bewegen kann.
              <View style={{height:30, width: 10, backgroundColor: 'yellow'}}>  //ein Leerer View wegen Flexbox. Sorgt dafür, dass der Output nach rechts verschobenm wird, weil Der view den PLatz links von dem Output Beansprucht
              </View>
              <View> //Wieder ein leerer View für flexbox
                <Text h1> {this.state.show && //
                  (this.state.textOut)}
                </Text>
                <View style={{height:10, backgroundColor: 'green'}}>
                </View>
              </View>
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  output: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 300,
  }
});
