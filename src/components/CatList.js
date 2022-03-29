import * as React from 'react';
import {FlatList, View} from 'react-native';
import CatListItem from './CatListItem';

export default class CatList extends React.Component {
  renderItem = ({item}) => {
    console.log('Item: ', item);
    return (
      <View>
        <CatListItem navigation={this.props.navigation} item={item} />
      </View>
    );
  };

  render() {
    const {data} = this.props;
    return (
      <View>
        <FlatList data={data} renderItem={(item) => this.renderItem(item)} />
      </View>
    );
  }
}
