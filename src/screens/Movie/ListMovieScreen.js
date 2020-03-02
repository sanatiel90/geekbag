import React, { Component } from 'react';
import getRealm from './../../services/realm';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Picker,
  FlatList,
} from 'react-native';

import ItemList from '../../components/ItemList';

class ListMovieScreen extends Component {
  state = {
    movies: [],
    order: 'rating-true',
    searchValue: '',
  };

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies = async () => {
    const realm = await getRealm();

    const [order, desc] = this.state.order.split('-');

    const searchKey = this.state.searchValue;

    const data = realm
      .objects('Movie')
      .filtered(`title CONTAINS[c] "${searchKey}" `)
      .sorted(order, desc === 'true' ? true : false);

    this.setState({
      movies: data,
    });
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <Picker
          style={styles.picker}
          selectedValue={this.state.order}
          onValueChange={(itemValue, itemIndex) => {
            this.setState({ order: itemValue });
            this.loadMovies();
          }}>
          <Picker.Item label="Melhores Filmes" value="rating-true" />
          <Picker.Item label="Piores Filmes" value="rating-false" />
          <Picker.Item label="Gênero" value="genre-false" />
          <Picker.Item label="Últimos Adicionados" value="id-true" />
        </Picker>

        <TextInput
          style={styles.inputSearch}
          placeholder="Pesquisar"
          value={this.state.searchValue}
          onChangeText={text => {
            this.setState({ searchValue: text });
            this.loadMovies();
          }}
        />

        <FlatList
          data={this.state.movies}
          renderItem={({ item }) => (
            <ItemList
              title={item.title}
              genre={item.genre}
              rating={item.rating}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10,
  },

  picker: {
    height: 36,
    backgroundColor: '#E3F2FD',
    fontSize: 10,
    marginVertical: 2,
  },

  inputSearch: {
    height: 36,
    fontSize: 16,
    backgroundColor: '#E3F2FD',
    borderRadius: 4,
    padding: 8,
    marginVertical: 6,
  },
});

export default ListMovieScreen;
