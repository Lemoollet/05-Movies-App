import React from 'react';
import {Movie} from '../interfaces/movieInterface';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamsList} from '../navigation/StackNavigation';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

type NavigationProp = NativeStackNavigationProp<RootStackParamsList, 'Home'>;

const MoviePoster = ({movie, height = 420, width = 300}: Props) => {
  const navigation = useNavigation<NavigationProp>();
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', movie)}
      activeOpacity={0.8}
      style={{
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 7,
      }}>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

export default MoviePoster;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
});
