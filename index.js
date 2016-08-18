import React, {Component, PropTypes} from 'react';
import {
  Dimensions,
  View,
  Text,
  Platform,
} from 'react-native';

export default class TextMore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentLines: 0,
      isShowMore: false,
      isExpand: false
    };
  }

  static propTypes = {
    //style:View.propTypes.style, TODO: for view

    contentText: PropTypes.string.isRequired,
    contentStyle: Text.propTypes.style,
    contentLines: PropTypes.number,

    moreText: PropTypes.array.isRequired,
    moreStyle: Text.propTypes.style
  };

  static defaultProps = {
    moreText: ['收起详情', '展开详情'],
    contentLines: 3
  };

  render() {
    let moreElement = null;
    if (this.state.isShowMore) {
      let {moreText} = this.props;
      moreElement = (<Text onPress={()=>{this._switchCollapse()}} style={[styles.more_base, {...this.props.moreStyle}]}>{this.state.isExpand ? moreText[0] : moreText[1]}</Text>);
    }
    return (
      <View>
        <Text onLayout={(e)=>{this._onLayout(e)}} style={[styles.content_base, {...this.props.contentStyle}]} numberOfLines={this.state.contentLines}>{this.props.contentText}</Text>
        {moreElement}
      </View>
    )
  }

  _switchCollapse() {
    this.setState({
      isExpand: !this.state.isExpand
    });
    if (this.state.contentLines === this.props.contentLines) {
      this.setState({contentLines: 0})
    }
    else {
      this.setState({contentLines: this.props.contentLines})
    }
  }

  _onLayout(e) {
    let {height} = e.nativeEvent.layout;

    if (height > this.props.contentLines * 24) {
      if (!this.state.isExpand) {
        this.setState({contentLines: this.props.contentLines})
      }
      if (this.props.contentLines !== 0) {
        this.setState({isShowMore: true});
      }
    }

  }
}

const styles = {
  content_base: {
    color: '#666',
    flex: 1,
    marginTop: 15,
    width: Dimensions.get('window').width - 45 - 15,
    ...Platform.select({ios: {lineHeight: 24}, android: {lineHeight: 34}})
  },
  more_base: {
    marginTop: 10,
    fontSize: 14,
    color: '#1AC964'
  }
};