import React from 'react';
import MovieDetails from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';
import {useMovieDetails} from '../hooks/useMovieDetails';
import {RootStackParamsList} from '../navigation/StackNavigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  ActivityIndicator,
} from 'react-native';

type Props = NativeStackScreenProps<RootStackParamsList, 'Details'>;

const {height} = Dimensions.get('window');

const Details = ({route}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const {isLoading, cast, fullMovieDetails} = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image source={{uri}} style={styles.image} />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator size={30} color={'grey'} style={{marginTop: 20}} />
      ) : (
        <MovieDetails fullmovieDetail={fullMovieDetails!} cast={cast} />
      )}
      <Icon color="white" name="arrow-back-outline" size={100} />
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: height * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  image: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
