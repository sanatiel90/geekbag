import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';

import HomeMovieScreen from './src/screens/Movie/HomeMovieScreen';
import HomeBookScreen from './src/screens/Book/HomeBookScreen';
import HomeSeriesScreen from './src/screens/Series/HomeSeriesScreen';

import AddMovieScreen from './src/screens/Movie/AddMovieScreen';
import AddBookScreen from './src/screens/Book/AddBookScreen';
import AddSeriesScreen from './src/screens/Series/AddSeriesScreen';

import ListMovieScreen from './src/screens/Movie/ListMovieScreen';

//tab
const Tab = createBottomTabNavigator();
//stacks para cada uma das tabs, cada stack com suas telas especificas
const MovieStack = createStackNavigator();
const BookStack = createStackNavigator();
const SeriesStack = createStackNavigator();

//telas na stack (pilha) Movie
function MovieStackScreen() {
  return (
    <MovieStack.Navigator screenOptions={optionsGeneralScreen}>
      <MovieStack.Screen
        name="HomeMovieScreen"
        options={{ title: 'GeekBag - Filmes' }}
        component={HomeMovieScreen}
      />

      <MovieStack.Screen
        name="AddMovieScreen"
        options={{ title: 'Novo Filme' }}
        component={AddMovieScreen}
      />

      <MovieStack.Screen
        name="ListMovieScreen"
        options={{ title: 'Lista de Filmes' }}
        component={ListMovieScreen}
      />
    </MovieStack.Navigator>
  );
}

//telas na stack (pilha) Book
function BookStackScreen() {
  return (
    <BookStack.Navigator screenOptions={optionsGeneralScreen}>
      <BookStack.Screen
        name="HomeBookScreen"
        options={{ title: 'GeekBag - Livros' }}
        component={HomeBookScreen}
      />

      <BookStack.Screen
        name="AddBookScreen"
        options={{ title: 'Novo Livro' }}
        component={AddBookScreen}
      />
    </BookStack.Navigator>
  );
}

//telas na stack (pilha) Series
function SeriesStackScreen() {
  return (
    <SeriesStack.Navigator screenOptions={optionsGeneralScreen}>
      <SeriesStack.Screen
        name="HomeSeriesScreen"
        options={{ title: 'GeekBag - Seriados' }}
        component={HomeSeriesScreen}
      />

      <SeriesStack.Screen
        name="AddSeriesScreen"
        options={{ title: 'Novo Seriado' }}
        component={AddSeriesScreen}
      />
    </SeriesStack.Navigator>
  );
}

export default class App extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="#1A237E" barStyle="light-content" />
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Movie') {
                  iconName = focused ? 'video' : 'video';
                } else if (route.name === 'Book') {
                  iconName = focused ? 'book' : 'book';
                } else if (route.name === 'Series') {
                  iconName = focused ? 'tv' : 'tv';
                }

                return <Icon name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: '#FB8C00',
              inactiveTintColor: '#BDBDBD',
              labelStyle: {
                fontWeight: 'bold',
              },
            }}>
            <Tab.Screen
              options={{ title: 'Filmes' }}
              name="Movie"
              component={MovieStackScreen}
            />
            <Tab.Screen
              options={{ title: 'Livros' }}
              name="Book"
              component={BookStackScreen}
            />
            <Tab.Screen
              options={{ title: 'Séries' }}
              name="Series"
              component={SeriesStackScreen}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

const optionsGeneralScreen = {
  headerStyle: {
    backgroundColor: '#0D47A1',
  },
  headerTintColor: '#FFFFFF',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
