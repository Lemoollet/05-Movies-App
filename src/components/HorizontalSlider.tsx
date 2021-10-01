import React from 'react';
import MoviePoster from './MoviePoster';
import {FlatList, Text, View} from 'react-native';
import {Movie} from '../interfaces/movieInterface';

interface Props {
  title?: string;
  movies: Movie[];
}

const HorizontalSlider = ({title, movies}: Props) => {
  return (
    <View style={{height: !!title ? 260 : 220}}>
      {title && (
        <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 10}}>
          {title}
        </Text>
      )}
      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={(item: Movie) => item.id.toString()}
        horizontal={true}
      />
    </View>
  );
};

export default HorizontalSlider;
