import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import TextMore from './textmore';

export default class test0280 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {

  }

  render() {
    return (
      <View style={styles.container}>
        <TextMore contentStyle={{ color : 'red' }} contentLines={2}
                  contentText={'如果 v都会指 了 thisArg 参数,或者赋值为 null 或 undefined，则 this 指向全局对象 。'} />
        <TextMore moreText={['Close', 'Open']}
                  contentText={'如果 thisArg 参数有值，则每次 callback 函数被调用的时候，this 都会指向 thisArg 参数上的这个对象。如果省略了 thisArg 参数,或者赋值为 null 或 undefined，则 this 指向全局对象 。'} />
        <TextMore contentLines={4}
                  contentText={'map 方法会给原数组中的每个元素都按顺序调用一次 callback 函数。callback 每次执行后的返回值组合起来形成一个新数组。 callback 函数只会在有值的索引上被调用；那些从来没被赋过值或者使用 delete 删除的索引则不会被调用。'} />

        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Text>
          <Text>First part and </Text>
          <Text>second part</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container    : {
    flex            : 1,
    justifyContent  : 'center',
    alignItems      : 'center',
    backgroundColor : '#F5FCFF',
  },
  welcome      : {
    fontSize  : 20,
    textAlign : 'center',
    margin    : 10,
  },
  instructions : {
    textAlign    : 'center',
    color        : '#333333',
    marginBottom : 5,
  },
});
