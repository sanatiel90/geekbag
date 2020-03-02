import React, { Component } from 'react';
import getRealm from './../../services/realm';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import ItemList from '../../components/ItemList';

const dataMovies = [
  { id: 1, title: 'Conde de Monte Cristo', genre: 'Ação', rating: 5 },
  { id: 2, title: 'Armaggedon', genre: 'Comédia', rating: 2 },
  { id: 3, title: 'Bacural', genre: 'Aventura', rating: 3 },
  { id: 4, title: 'Coringa', genre: 'Drama', rating: 4 },
  { id: 5, title: 'Velozes e Furiosos', genre: 'Terror', rating: 5 },
  { id: 6, title: 'Parasita', genre: 'Romance', rating: 1 },
  { id: 7, title: 'Bad Boys', genre: 'Ficção Científica', rating: 5 },
  { id: 8, title: 'Efeito Borboleta', genre: 'Infantil', rating: 3 },
  { id: 9, title: 'Frozen', genre: 'Animação', rating: 4 },
];

class HomeMovieScreen extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies = async () => {
    const realm = await getRealm();

    const data = realm.objects('Movie').sorted('id', true);

    this.setState({
      movies: data,
    });
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('ListMovieScreen')}>
            <Icon
              style={styles.buttonIcon}
              name={'list'}
              size={18}
              color={'#FFFFFF'}
            />

            <Text style={styles.buttonText}>Listar Filmes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('AddMovieScreen')}>
            <Icon
              style={styles.buttonIcon}
              name={'plus'}
              size={18}
              color={'#FFFFFF'}
            />
            <Text style={styles.buttonText}>Novo Filme</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textTitle}>Últimos adicionados</Text>

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

export default HomeMovieScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10,
  },

  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 4,
  },

  button: {
    backgroundColor: '#0091EA',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 44,
    borderRadius: 2,
    flex: 1,
    marginStart: 4,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  buttonIcon: {
    marginRight: 6,
  },

  textTitle: {
    color: '#212121',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
});
