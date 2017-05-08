import React, {Component} from 'react';
import {
  View,
  ART
} from 'react-native';
import {
  Text
} from 'native-base';
var d3 = require('d3');
var d3Shape = require('d3-shape');

const {
  Surface,
  Group,
  Shape,
} = ART;

const UsageGraph = React.createClass({
  render() {
    let trips = this.props.data.slice(-10).reverse().map(function(trip) {
      return {"highway": trip.secs_above_72kph, "stop-and-go": trip.secs_below_72kph, "city": trip.secs_below_10kph};
    });

    return (
      <Surface>
        <Group>
          <Shape
            d={this.drawGraph(this.props)}
          />
        </Group>
      </Surface>
    );
  },

  drawGraph(data) {
    var stack = d3Shape.stack()
          .keys(["highway", "stop-and-go", "city"])
          .order(d3.stackOrderNone)
          .offset(d3.stackOffsetNone);

    var series = stack(data);

    // return stack(data);
  }
});

export default UsageGraph;
