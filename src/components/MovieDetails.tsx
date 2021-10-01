import React from 'react';
import CastItem from './CastItem';
import Icon from 'react-native-vector-icons/Ionicons';
import {FlatList, Text, View} from 'react-native';
import {Cast} from '../interfaces/creditsInterface';
import {FullMovieDetails} from '../interfaces/movieInterface';

interface Props {
  fullmovieDetail: FullMovieDetails;
  cast: Cast[];
}

const MovieDetails = ({fullmovieDetail, cast}: Props) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text>{fullmovieDetail.vote_average} </Text>
          <Text style={{marginLeft: 5}}>
            - {fullmovieDetail.genres.map(e => e.name).join(', ')}
          </Text>
        </View>
        <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>
          Historia
        </Text>
        <Text style={{fontSize: 16}}>{fullmovieDetail.overview}</Text>
        <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>
          Presupuesto
        </Text>
        <Text style={{fontSize: 18}}>
          {formatter.format(fullmovieDetail.budget)}
        </Text>
      </View>
      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text
          style={{
            fontSize: 20,
            marginTop: 10,
            fontWeight: 'bold',
            marginHorizontal: 20,
          }}>
          Actores
        </Text>
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 10, height: 70}}
        />
      </View>
    </>
  );
};

export default MovieDetails;
