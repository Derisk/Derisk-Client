import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import Wallpaper from '../components/Wallpaper';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      desc: ''
    };
  }

  render() {
    return (
      <Wallpaper
      src=''
      >
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>

          <ScrollView style={styles.container}>
                <GooglePlacesAutocomplete
                    placeholder='Enter Location'
                    minLength={2}
                    autoFocus={false}
                    returnKeyType={'default'}
                    fetchDetails={true}
                    query={{
                        key: 'AIzaSyDJzgCRfB2dQTKAH56rkI369dee0ofRh20',
                        language: 'en',
                        types: '(cities)'
                    }}
                    styles={{
                        textInputContainer: {
                            backgroundColor: 'rgba(0,0,0,0)',
                            borderTopWidth: 0,
                            borderBottomWidth:0
                        },
                        textInput: {
                            marginLeft: 0,
                            marginRight: 0,
                            height: 38,
                            color: '#5d5d5d',
                            fontSize: 16
                        },
                        predefinedPlacesDescription: {
                            color: '#1faadb'
                        },
                    }}
                    currentLocation={false}
                />
            </ScrollView>

          <TextInput
            placeholder='Describe your business...'
            multiline={true}
            numberOfLines={4}
            onChangeText={(text) => this.setState({desc})}
            value={this.state.desc}/>

        </ScrollView>
      </View>
      </Wallpaper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
    marginLeft: 20,
    marginRight: 20
  }
});
