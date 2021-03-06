import React from 'react';
import useMovies from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';
import MoviePoster from '../components/MoviePoster';
import HorizontalSlider from '../components/HorizontalSlider';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ActivityIndicator, Dimensions, View, ScrollView} from 'react-native';

const {width} = Dimensions.get('window');

const Home = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        <View style={{height: 445}}>
          <Carousel
            data={nowPlaying}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={width}
            itemWidth={300}
          />
        </View>
        <HorizontalSlider movies={popular} title={'Popular'} />
        <HorizontalSlider movies={topRated} title={'Top Rated'} />
        <HorizontalSlider movies={upcoming} title={'Upcoming'} />
      </View>
    </ScrollView>
  );
};

export default Home;
