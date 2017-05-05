import React, {Component} from 'react';
import {
  View,
  ART
} from 'react-native';
import {
  Text
} from 'native-base';

const {
  Surface,
  Group,
  Shape,
} = ART;

class UsageGraph extends Component {
  render() {
    return (
      <Surface>
        <Group>
          <Shape />
        </Group>
      </Surface>
    );
  }
}

export default UsageGraph;
