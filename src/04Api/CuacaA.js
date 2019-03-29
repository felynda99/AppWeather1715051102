import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput} from 'react-native';
  
export default class CuacaA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {city: '',
    forecast: {
      main: '',
      description: '',
      temp: '',
    }
    };
  }
  getWeather= () => {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q='+ this.state.city + '&appid=ad1f506b88c1a6ed9a6a2b9e0882b359&units=metric';
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.setState({
        forecast : {
          main: responseJson.weather[0].main,
          description: responseJson.weather[0].description,
          temp: responseJson.main.temp,
        }
      });
    }
    );
  }
  render() {
    return (
      <View style={styles.containerMain}>
          <View style={styles.box1}>
              <Text style={{ padding: 30, fontSize: 25, color: 'white', textAlign: 'center'}} >Perkiraan Cuaca</Text>
          </View>
          <View style={styles.box2}>
              <Text style={styles.text}>Masukkan Nama Kota</Text>
              <View style={styles.textInput}>
              <TextInput style={{textAlign: 'center'}} placeholder=" Masukan Nama kota " onChangeText={(city) => this.setState({ city })}/></View>
              <TouchableHighlight onPress={() => this.getWeather()}>
              <Text style={styles.text1}>Lihat</Text>
              </TouchableHighlight>      
          </View>
          <View style={styles.box3}>
          <Text style={styles.text}>Suhu :  { this.state.forecast.temp}</Text>
          <Text style={styles.text}>Cuaca : { this.state.forecast.main}</Text>
          <Text style={styles.text}>Deskripsi : { this.state.forecast.description}</Text>
          </View>
          <View style={styles.box4}>
              <Text style={{ padding: 15, fontSize: 15, color: 'white'}} >copyright @felyn</Text>
          </View>
               
      </View>
       );
      }
  }

  const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        flexDirection: 'column',
    },
    box1: {
        flex: 0.3,
        backgroundColor: '#1E90FF',
        marginTop : 20,
        marginBottom : 20,
    },
    box2: {
        flex: 0.5,
        backgroundColor: '#F57F17',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 8,
        marginRight: 8,
    }, 
    box3: {
        flex: 1,
        backgroundColor: '#F57F17',
        flexDirection: 'column',
        marginTop: 8,
        marginLeft: 8,
        marginRight: 8,
    },
    box4: {
        flex: 0.2,
        backgroundColor: '#1E90FF',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 30,
    },
    textInput: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        height: 35,
        width: 160,
        marginTop: 18,
    },
    text: {
      color: 'white',
      fontSize: 20,
      marginLeft: 20,
      marginTop: 10,
    },
    text1: {
      color: 'black',
      fontSize: 20,
      marginTop: 15,
    }, 
    });