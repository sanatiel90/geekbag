import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Picker,
  ScrollView,
  Keyboard,
} from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

import getRealm from './../../services/realm';

const movieGenres = [
  { id: 1, label: 'Ação', value: 'Ação' },
  { id: 2, label: 'Animação', value: 'Animação' },
  { id: 3, label: 'Aventura', value: 'Aventura' },
  { id: 4, label: 'Comédia', value: 'Comédia' },
  { id: 5, label: 'Documentário', value: 'Documentário' },
  { id: 6, label: 'Drama', value: 'Drama' },
  { id: 7, label: 'Faroeste', value: 'Faroeste' },
  { id: 8, label: 'Ficção Científica', value: 'Ficção Científica' },
  { id: 9, label: 'Romance', value: 'Romance' },
  { id: 10, label: 'Suspense', value: 'Suspense' },
  { id: 11, label: 'Terror', value: 'Terror' },
  { id: 12, label: 'Outros', value: 'Outros' },
];

class AddMovieScreen extends Component {
  state = {
    title: '',
    genre: '',
    rating: 0,
    comment: '',
    data: [],
  };

  addMovie = async () => {
    const { title, genre, rating, comment } = this.state;

    //faz conexao com realm
    const realm = await getRealm();

    //recupera o último movie q foi adicionado, para poder saber o id do novo
    const lastMovie = realm.objects('Movie').sorted('id', true)[0];

    const data = {
      id: lastMovie.id + 1,
      title,
      rating,
      genre,
      comment,
    };

    //realm.write: usado para fazer modificacoes no bd(insert,update,delete)
    realm.write(() => {
      realm.create('Movie', data);
    });

    this.props.navigation.navigate('ListMovieScreen');
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <TextInput
            style={styles.inputName}
            placeholder="Nome do Filme"
            underlineColorAndroid="transparent"
            onChangeText={text => {
              this.setState({ title: text });
            }}
          />

          <Picker
            onFocus={() => {
              Keyboard.dismiss();
            }}
            selectedValue={this.state.genre}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ genre: itemValue })
            }>
            {movieGenres.map(genre => {
              return (
                <Picker.Item
                  key={genre.id}
                  label={genre.label}
                  value={genre.value}
                />
              );
            })}
          </Picker>

          <AirbnbRating
            count={5}
            reviews={['Horrível', 'Ruim', 'Bom', 'Ótimo', 'Sensacional']}
            defaultRating={3}
            size={25}
            onFinishRating={rating => this.setState({ rating })}
          />

          <TextInput
            underlineColorAndroid="transparent"
            style={styles.inputComment}
            placeholder="Comentários"
            multiline={true}
            scrollEnabled={true}
            numberOfLines={4}
            textAlignVertical="top"
            onChangeText={text => this.setState({ comment: text })}
          />

          <TouchableOpacity style={styles.button} onPress={this.addMovie}>
            <Text style={styles.buttonText}>Adicionar à sua GeekBag</Text>
          </TouchableOpacity>
        </ScrollView>
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

  inputName: {
    height: 50,
    fontSize: 16,
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 8,
    marginVertical: 10,
  },

  picker: {
    backgroundColor: 'white',
    fontSize: 16,
    marginVertical: 10,
  },

  inputComment: {
    marginTop: 10,
    fontSize: 16,
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 8,
    marginVertical: 14,
  },

  button: {
    backgroundColor: '#0091EA',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    borderRadius: 2,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AddMovieScreen;
