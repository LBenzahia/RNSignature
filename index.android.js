/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SignaturePad from 'react-native-signature-pad';

export default class RNSignature extends Component {
  _signaturePadError = (error) => {
    console.error(error);
  };

  _signaturePadChange = ({base64DataUrl}) => {
    console.log("Got new signature: " + base64DataUrl);
  };
  render() {
    return (
      <View style={{flex: 1}}>
          <SignaturePad onError={this._signaturePadError}
                        onChange={this._signaturePadChange}
                        rotateClockwise={true}
                        square={true}
                        //onSaveEvent={this._onSaveEvent}
                        style={{flex: 1, backgroundColor: 'white'}}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('RNSignature', () => RNSignature);
