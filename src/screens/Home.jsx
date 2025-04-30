import { FlatList, View, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../redux/slices/CardSlice';
import Cards from '../components/Cards';

const Home = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.cards);

  useEffect(() => {
    dispatch(fetchCards());
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Cards products={item} />}
        />
      )}
    </View>
  );
};

export default Home;
